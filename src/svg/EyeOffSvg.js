import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const EyeOffSvg = () => (
  <Svg width={16} height={16} fill="none">
    <Path
      d="M9.413 9.413a2 2 0 1 1-2.827-2.826M.667.667l14.667 14.666M11.96 11.96A6.713 6.713 0 0 1 8 13.333C3.333 13.333.667 8 .667 8A12.3 12.3 0 0 1 4.04 4.04l7.92 7.92ZM6.6 2.827a6.08 6.08 0 0 1 1.4-.16C12.666 2.667 15.333 8 15.333 8c-.405.757-.887 1.47-1.44 2.127L6.6 2.827Z"
      stroke="#1B1D4D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EyeOffSvg;
