import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Card from '../screens/Animated/Card';

const { Navigator, Screen } = createStackNavigator();

const StackRouter = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Home" component={Card} />
      </Navigator>
    </NavigationContainer>
  );
}

export default StackRouter;