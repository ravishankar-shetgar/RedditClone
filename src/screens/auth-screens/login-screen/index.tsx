import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {makeRedirectUri, ResponseType, useAuthRequest} from 'expo-auth-session';
import styles from './styles';
import RedditLogoWithName from '../../../assets/svgs/reddit-logo-with-name';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLoggedIn} from '../../../redux/user-state/action';

const APP_CLIENT_ID = 'TzQVwvcWdp0PA_TdwziAWw';
const APP_REDIRECT_URI = 'com.redditclone://redirect-sign-in';

const END_POINTS = {
  authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
};

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: APP_CLIENT_ID,
      scopes: ['identity', 'mysubreddits', 'read'],
      redirectUri: makeRedirectUri({
        native: APP_REDIRECT_URI,
      }),
    },
    END_POINTS,
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      // user has successfully logged in
      const token = response.params.access_token;
      dispatch(setUserLoggedIn(token));
    } else {
      // login attempt failed / cancelled
      console.log(response);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <View style={styles.appLogo}>
        <RedditLogoWithName />
      </View>

      <Text style={styles.title}>Reddit Clone App</Text>
      <Text style={styles.subTitle}>
        {`Enjoy your favorite subreddits\non your mobile device.`}
      </Text>

      <FastImage
        style={styles.image}
        resizeMode={'contain'}
        source={require('./../../../assets/images/login-screen.png')}
      />

      <TouchableOpacity
        disabled={!request}
        style={styles.loginButton}
        onPress={() => {
          promptAsync();
        }}>
        <Text style={styles.buttonText}>Login with your Reddit Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
