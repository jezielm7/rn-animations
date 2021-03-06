import React, { useRef } from 'react';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Animated
} from 'react-native';

import styles from './styles';

function Card() {
  const { current: opacity } = useRef(new Animated.Value(0));
  const { current: offset } = useRef(new Animated.Value(0));

  function showCard() {
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }

  function hideCard() {
    Animated.timing(opacity, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  function moveUp() {
    Animated.timing(offset, {
      toValue: -50,
      useNativeDriver: true,
    }).start();
  }

  function moveDown() {
    Animated.timing(offset, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          width: 150,
          height: 150,
          opacity,
          borderRadius: 5,
          marginBottom: 30,
          backgroundColor: 'red',
          transform: [
            {
              translateY: offset,
            }
          ]
        }}
      />

      <View style={styles.btnContainer}>
        <View style={styles.btnSection}>
          <TouchableOpacity style={styles.button} onPress={showCard}>
            <Text style={styles.btnText}>Show</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={hideCard}>
            <Text style={styles.btnText}>Hide</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnSection}>
          <TouchableOpacity style={styles.button} onPress={moveUp}>
            <Text style={styles.btnText}>Move Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={moveDown}>
            <Text style={styles.btnText}>Move Down</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Card;
