import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoard} from '../screens/dashBoard';
import {Screens} from './screens';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.DASHBOARD} component={DashBoard} />
    </Stack.Navigator>
  );
};
