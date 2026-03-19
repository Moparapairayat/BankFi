import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const InfoSvg = () => (
  <Svg width={19} height={19} fill="none">
    <Path
      d="M9.333 12.533v-3.2m0-3.2h.008m7.992 3.2a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default InfoSvg;
