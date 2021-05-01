import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Card from '../screens/Animated/Card';
import ReanimatedCard from '../screens/Reanimated/Card';

const { Navigator, Screen } = createStackNavigator();

const StackRouter = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Card" component={Card} />
        <Screen name="ReanimatedCard" component={ReanimatedCard} />
      </Navigator>
    </NavigationContainer>
  );
}

export default StackRouter;