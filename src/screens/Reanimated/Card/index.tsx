import React, { useRef } from 'react';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#312e38',
  },
  btnContainer: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
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

export default ReanimatedCard;
