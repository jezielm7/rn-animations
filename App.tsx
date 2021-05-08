/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRouter from './src/routes/stack.routes';
import SplashScreen from './src/components/splash-screen';

const App = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3600);
  }, []);

  return (
    <>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>

      <SplashScreen visible={visible} />
    </>
  );
};

export default App;
