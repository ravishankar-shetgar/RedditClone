import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/main-stack';
import {StatusBar} from 'react-native';

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  });

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
