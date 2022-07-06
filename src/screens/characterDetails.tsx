import * as React from 'react';
import {Text, View} from 'react-native';
import {CharacterItemStyles} from '../components/characterItem.styles';
import {useCharacterDetails} from './useCharacterDetails';

export const CharacterDetails = () => {
  const {
    dimensions,
    episodeDate,
    episodeName,
    episodeNumber,
    gender,
    locationName,
    name,
    numberOfCharacters,
    numberOfResidents,
    origin,
    species,
    status,
  } = useCharacterDetails();
  return (
    <View style={CharacterItemStyles.subContainer}>
      <Text style={CharacterItemStyles.titleTextContainer}>{name}</Text>
      <Text>{gender}</Text>
      <Text>{status}</Text>
      <Text>{species}</Text>
      <Text>{origin}</Text>
      <Text>{locationName}</Text>
      <Text>{dimensions}</Text>
      <Text>{numberOfResidents}</Text>
      <Text>{episodeName}</Text>
      <Text>{episodeDate}</Text>
      <Text>{episodeNumber}</Text>
      <Text>{numberOfCharacters}</Text>
    </View>
  );
};
