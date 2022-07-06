import {useCallback, useContext, useEffect, useState} from 'react';
import {DashboardScreenProps, Screen} from '../navigation/screens';
import {DashBoard} from '../models/dashBoard';
import {getCharactersFromApi} from '../services/dashBoard.service';
import {useNavigation} from '@react-navigation/native';
import {CharactersContext} from '../context';

export const useDashBoard = () => {
  const navigation = useNavigation<DashboardScreenProps>();
  const {setCharacters} = useContext(CharactersContext);
  const [gridData, setGridData] = useState<DashBoard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const characters = await getCharactersFromApi();
      setGridData(characters);
    } catch (serviceError) {
      setError(serviceError);
      console.log(serviceError);
    } finally {
      setLoading(false);
    }
  }, [setGridData, setLoading, setError]);

  const onUserProfilePress = (index: number) => {
    setCharacters(gridData[index]);
    navigation.navigate(Screen.DETAILS);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    error, // used to show error alert design if api fails
    gridData,
    loading,
    onUserProfilePress,
  };
};
