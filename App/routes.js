import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {splashscreen} from './pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="splashscreen">
      <Stack.Screen name="splashscreen" component={splashscreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};
