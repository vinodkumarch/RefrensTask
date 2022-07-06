import {useCallback, useContext, useEffect, useState} from 'react';
import {CharacterScreenProps, Screen} from '../navigation/screens';
import {Character} from '../models/character';
import {getCharactersFromApi} from '../services/character.service';
import {useNavigation} from '@react-navigation/native';
import {CharactersContext} from '../context';

export const useCharacterList = () => {
  const navigation = useNavigation<CharacterScreenProps>();
  const {setCharacters} = useContext(CharactersContext);
  const [charactersData, setCharactersData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const characters = await getCharactersFromApi();
      setCharactersData(characters);
    } catch (serviceError) {
      setError(serviceError);
      console.log(serviceError);
    } finally {
      setLoading(false);
    }
  }, [setCharactersData, setLoading, setError]);

  const onCharacterProfilePress = (index: number) => {
    setCharacters(charactersData[index]);
    navigation.navigate(Screen.CHARACTER_DETAILS);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    error, // used to show error alert design if api fails
    charactersData,
    loading,
    onCharacterProfilePress,
  };
};
