import * as React from 'react';
import AppStack from './app-stack';
import AuthStack from './auth-stack';

const MainStack = () => {
  let user = false;

  if (user) {
    // if user is logged in,
    return <AppStack />;
  } else {
    return <AuthStack />;
  }
};

export default MainStack;
