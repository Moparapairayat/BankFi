import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const UserOneSvg = () => (
  <Svg width={16} height={16} fill="none">
    <Path
      d="M13.333 14v-1.333A2.667 2.667 0 0 0 10.667 10H5.333a2.667 2.667 0 0 0-2.666 2.667V14M8 7.333A2.667 2.667 0 1 0 8 2a2.667 2.667 0 0 0 0 5.333Z"
      stroke="#4C4C60"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default UserOneSvg;
