import {Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import APP_THEME from '../../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: APP_THEME.colors.screenBgColor,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    flex: 1,
    fontWeight: '500',
  },
  statusBarPlaceHolder: {
    backgroundColor: APP_THEME.colors.screenBgColor,
    height: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    width: '100%',
  },
  subredditLogo: {
    height: 35,
    width: 35,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: APP_THEME.colors.redditBrandColor,
    marginRight: 15,
    borderRadius: 100,
  },
  header: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderColor: APP_THEME.colors.redditBrandColor,
    paddingBottom: 12,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  loader: {
    height: 200,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
