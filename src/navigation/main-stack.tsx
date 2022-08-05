import * as React from 'react';
import {useSelector} from 'react-redux';
import {IState} from '../redux/state';
import AppStack from './app-stack';
import AuthStack from './auth-stack';

const MainStack = () => {
  const isUserLoggedIn = useSelector(
    (state: IState) => state.userState.isLoggedIn,
  );

  if (isUserLoggedIn) {
    // if user is logged in,
    return <AppStack />;
  } else {
    return <AuthStack />;
  }
};

export default MainStack;
