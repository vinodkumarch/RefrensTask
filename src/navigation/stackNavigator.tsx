import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoard} from '../screens/dashBoard';
import {DetailsScreen} from '../screens/detailsScreen';
import {NavStackParams, Screen} from './screens';

const Stack = createNativeStackNavigator<NavStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screen.DASHBOARD}>
      <Stack.Screen name={Screen.DASHBOARD} component={DashBoard} />
      <Stack.Screen name={Screen.DETAILS} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
