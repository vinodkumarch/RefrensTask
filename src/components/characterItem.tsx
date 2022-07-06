import * as React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {Character} from '../models/character';
import {CharacterItemStyles} from './characterItem.styles';

interface CharacterItemProps {
  character: Character;
  onCharacterProfilePress: () => void;
}

export const CharacterItem = ({
  character,
  onCharacterProfilePress,
}: CharacterItemProps) => {
  return (
    <TouchableOpacity
      style={CharacterItemStyles.container}
      onPress={onCharacterProfilePress}>
      <Image
        source={{uri: character.image}}
        style={CharacterItemStyles.imageContainer}
      />
      <Text style={CharacterItemStyles.titleTextContainer}>
        {character.name}
      </Text>
    </TouchableOpacity>
  );
};
