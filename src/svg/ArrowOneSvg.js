import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowOneSvg = () => (
  <Svg width={7} height={11} fill="none">
    <Path
      d="m1 9.571 4.286-4.285L1 1"
      stroke="#4C4C60"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowOneSvg;
