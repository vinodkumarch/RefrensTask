import * as React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {DashBoard} from '../models/dashBoard';
import {renderItemStyles} from './renderItem.styles';

interface RenderItemProps {
  item: DashBoard;
}

export const RenderItem = ({item}: RenderItemProps) => {
  return (
    <TouchableOpacity style={renderItemStyles.container}>
      <Image
        source={{uri: item.image}}
        style={renderItemStyles.imageContainer}
      />
      <Text style={renderItemStyles.titleTextContainer}>{item.name}</Text>
    </TouchableOpacity>
  );
};
