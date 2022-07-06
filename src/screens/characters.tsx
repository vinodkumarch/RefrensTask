import * as React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {CharacterItem} from '../components/characterItem';
import {CharacterStyles} from './characters.styles';
import {useCharacterList} from './useCharacterList';

export const CharactersList = () => {
  const {charactersData, loading, onCharacterProfilePress} = useCharacterList();
  return loading ? (
    <ActivityIndicator
      size={'large'}
      style={CharacterStyles.loadingIndicator}
    />
  ) : (
    <FlatList
      testID="characters.mainContainer"
      style={CharacterStyles.container}
      data={charactersData}
      renderItem={({item, index}) => (
        <CharacterItem
          character={item}
          onCharacterProfilePress={() => onCharacterProfilePress(index)}
        />
      )}
      numColumns={2}
    />
  );
};
