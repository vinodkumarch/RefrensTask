import * as React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
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
      <View style={renderItemStyles.subContainer}>
        <Text style={renderItemStyles.titleTextContainer}>{item.name}</Text>
        <Text>{item.gender}</Text>
        <Text>
          {item.status} - {item.species}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
