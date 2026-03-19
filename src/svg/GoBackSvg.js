import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const GoBackSvg = () => (
  <Svg width={8} height={14} fill="none">
    <Path
      d="M7 13 1 7l6-6"
      stroke="#1B1D4D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default GoBackSvg;
