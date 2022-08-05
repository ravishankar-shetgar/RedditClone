import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/main-stack';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Persistor, Store} from './src/redux/store';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    axios.defaults.headers.common['User-Agent'] =
      'reddit-clone-app--u/reddit_clone_app';
  });

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
