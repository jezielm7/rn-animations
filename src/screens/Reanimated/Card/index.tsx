import React from 'react';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './styles';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

function ReanimatedCard() {
  const offset = useSharedValue(0);

  const customStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: offset.value,
      }
    ]
  }));

  function moveUp() {
    offset.value = withSpring(-50);
  }

  function moveDown() {
    offset.value = withSpring(0);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          {
            width: 150,
            height: 150,
            borderRadius: 5,
            marginBottom: 30,
            backgroundColor: 'red',
          }, customStyle]}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={moveUp}>
          <Text style={styles.btnText}>Move Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={moveDown}>
          <Text style={styles.btnText}>Move Down</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ReanimatedCard;
