import {Dimensions} from 'react-native';

const APP_THEME = {
  colors: {
    screenBgColor: 'rgb(17,17,18)',
    redditBrandColor: '#FF4500',
  },
  screenSize: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
};

export default APP_THEME;
