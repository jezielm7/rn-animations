/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

function Home() {
  const { navigate } = useNavigation();

  function navigateToAnimatedCard() {
    navigate('Card');
  }

  function navigateToReanimatedCard() {
    navigate('ReanimatedCard');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <View style={styles.btnContainer}>
        <View style={styles.btnSection}>
          <TouchableOpacity style={styles.button} onPress={navigateToAnimatedCard}>
            <Text style={styles.btnText}>Animated</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={navigateToReanimatedCard}>
            <Text style={styles.btnText}>Reanimated</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;
