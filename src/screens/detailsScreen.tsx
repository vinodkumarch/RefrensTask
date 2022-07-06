import * as React from 'react';
import {Text, View} from 'react-native';
import {renderItemStyles} from '../components/renderItem.styles';
import {useDetailsScreen} from './useDetailsScreen';

export const DetailsScreen = () => {
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
  } = useDetailsScreen();
  return (
    <View style={renderItemStyles.subContainer}>
      <Text style={renderItemStyles.titleTextContainer}>{name}</Text>
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
