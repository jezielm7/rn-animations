/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Modal } from 'react-native';

import LottieView from 'lottie-react-native';

import welcome from '../../assets/welcome.json';

interface SplashScreenProps {
  visible: boolean;
}

function SplashScreen({ visible }: SplashScreenProps) {
  return (
    <Modal visible={visible} animationType="fade">
      <LottieView source={welcome} autoPlay style={styles.LottieSection} />
    </Modal>
  );
}

const styles = StyleSheet.create({
  LottieSection: {
    width: 200,
    height: 200,
    marginTop: 130,
    marginLeft: 30,
  },
});

export default SplashScreen;
