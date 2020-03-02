import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import HomeScreen from './Home/';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {store} from '../store';

const Stack = createStackNavigator();

const HomeScreenWithStore = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreenWithStore}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
