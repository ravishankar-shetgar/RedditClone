import {StyleSheet} from 'react-native';
import APP_THEME from '../../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 25,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: APP_THEME.colors.screenBgColor,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '500',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    lineHeight: 22,
  },
  loginButton: {
    alignSelf: 'center',
    alignContent: 'center',
    borderWidth: 4,
    borderColor: APP_THEME.colors.redditBrandColor,
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 18,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    height: 120,
    width: 325,
    borderRadius: 15,
  },
  appLogo: {
    height: 80,
    width: 240,
  },
});

export default styles;
