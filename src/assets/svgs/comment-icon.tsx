import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CommentIcon = () => (
  <Svg width={24} height={24}>
    <Path
      fillRule="evenodd"
      fill={'white'}
      d="M12.087 18 6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913ZM8 18.196 11.513 16H20V4H4v12h4v2.196Z"
    />
  </Svg>
);

export default CommentIcon;
