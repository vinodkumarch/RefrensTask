// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/stackNavigator';
import CharactersProvider from './src/context/charactersProvider';

function App() {
  return (
    <NavigationContainer>
      <CharactersProvider>
        <StackNavigator />
      </CharactersProvider>
    </NavigationContainer>
  );
}

export default App;
