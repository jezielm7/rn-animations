import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
  btnContainer: {
    marginTop: 50,
    marginLeft: 20,
    flexDirection: 'row',
  },
  btnSection: {
    marginRight: 20,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6767d7',
  },
  btnText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
