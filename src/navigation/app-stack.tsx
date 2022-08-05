import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeFeedScreen from '../screens/app-screens/home-feed-screen';
import PostCommentsScreen from '../screens/app-screens/post-comments-screen';
import {AppStackParamList} from './root-stack-params';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeFeedScreen"
        component={HomeFeedScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PostCommentsScreen"
        component={PostCommentsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
