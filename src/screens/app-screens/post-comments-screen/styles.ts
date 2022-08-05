import {StyleSheet} from 'react-native';
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
    fontSize: 22,
    flex: 1,
    fontWeight: '500',
  },
  statusBarPlaceHolder: {
    backgroundColor: APP_THEME.colors.screenBgColor,
    height: getStatusBarHeight(),
    width: '100%',
  },
  backIcon: {
    marginRight: 15,
    borderRadius: 100,
    borderColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    paddingBottom: 10,
    marginBottom: 15,
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
