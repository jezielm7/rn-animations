/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Lottie from '../screens/Lottie';
import Card from '../screens/Animated/Card';
import ReanimatedCard from '../screens/Reanimated/Card';

const { Navigator, Screen } = createStackNavigator();

const StackRouter = () => {
  return (
    <Navigator
      initialRouteName="Lottie"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Card" component={Card} />
      <Screen name="Lottie" component={Lottie} />
      <Screen name="ReanimatedCard" component={ReanimatedCard} />
    </Navigator>
  );
};

export default StackRouter;
