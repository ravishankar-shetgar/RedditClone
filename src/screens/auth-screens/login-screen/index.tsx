import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {makeRedirectUri, useAuthRequest} from 'expo-auth-session';
import styles from './styles';
import RedditLogoWithName from '../../../assets/svgs/reddit-logo-with-name';
import FastImage from 'react-native-fast-image';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
  tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
};

const LoginScreen = () => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'TzQVwvcWdp0PA_TdwziAWw',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'com.redditclone://redirect-sign-in',
      }),
    },
    discovery,
  );

  React.useEffect(() => {
    console.log(response, '----------response------------');

    if (response?.type === 'success') {
      const {code} = response.params;
      console.log(code, '-----------code-----------');
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
