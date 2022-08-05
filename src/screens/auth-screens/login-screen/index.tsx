import React from 'react';
import {View, Text, Button} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {makeRedirectUri, useAuthRequest} from 'expo-auth-session';

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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};

export default LoginScreen;
