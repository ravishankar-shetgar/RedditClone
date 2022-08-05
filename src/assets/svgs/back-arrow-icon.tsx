import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const BackArrowSvg = ({isBlack}: {isBlack?: boolean}): JSX.Element => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M16 12H3M10.766 20 3 12l7.766-8"
        stroke={isBlack ? 'black' : '#fff'}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={20} cy={12} r={1} fill={isBlack ? 'black' : '#fff'} />
    </Svg>
  );
};

export default BackArrowSvg;
