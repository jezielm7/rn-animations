/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-extra-semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import LottieView from 'lottie-react-native';

import signUp from '../../assets/signup.json';
import check from '../../assets/check.json';

import { Container } from './styles';

function Lottie() {
  const { navigate } = useNavigation();

  const buttonWidth = useSharedValue(300);
  const buttonRadius = useSharedValue(5);

  const [showCheck, setShowCheck] = useState(false);

  const animatedButtonStyle = useAnimatedStyle(() => ({
    width: buttonWidth.value,
    borderRadius: buttonRadius.value,
  }));

  function loginButton() {
    'worklet';
    buttonWidth.value = withTiming(60, {
      duration: 900,
    });
    buttonRadius.value = withTiming(30, {
      duration: 900,
    });

    setShowCheck(true);

    setTimeout(() => {
      navigate('Home');
    }, 1500);
  }

  return (
    <Container>
      <LottieView source={signUp} style={styles.LottieSection} />

      <View style={styles.btnContainer}>
        <View style={styles.btnSection}>

          <TouchableOpacity onPress={() => runOnJS(loginButton)()}>
            <Animated.View
              style={[
                {
                  height: 60,
                  width: 300,
                  marginBottom: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: showCheck ? '#2C7E85' : '#6767d7',
                },
                animatedButtonStyle,
              ]}
            >
              {
                showCheck
                  ? <LottieView source={check} autoPlay speed={0.5} style={styles.checkIcon} />
                  : <Text style={styles.btnText}>Enter</Text>
              }
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  LottieSection: {
    width: 300,
    height: 300,
  },
  btnContainer: {
    marginTop: 50,
    marginLeft: 20,
  },
  btnSection: {
    marginTop: 20,
  },
  btnText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  checkIcon: {
    width: 60,
    height: 60,
  },
});

export default Lottie;
