import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import { Provider } from 'react-redux';
import AppRouter from './src/views';
import store from './src/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  false && console.log(isDarkMode)
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
