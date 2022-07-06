import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharactersList} from '../screens/characters';
import {CharacterDetails} from '../screens/characterDetails';
import {NavStackParams, Screen} from './screens';

const Stack = createNativeStackNavigator<NavStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screen.CHARACTER}>
      <Stack.Screen name={Screen.CHARACTER} component={CharactersList} />
      <Stack.Screen
        name={Screen.CHARACTER_DETAILS}
        component={CharacterDetails}
      />
    </Stack.Navigator>
  );
};
