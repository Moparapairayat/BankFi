import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CreditCardSvg = () => (
  <Svg width={22} height={18} fill="none">
    <Path
      d="M18.818 1.023H4.091c-.904 0-1.636.732-1.636 1.636v9.818c0 .904.732 1.637 1.636 1.637h14.727c.904 0 1.637-.733 1.637-1.637V2.66c0-.904-.733-1.636-1.637-1.636Z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.173 4.161a1.636 1.636 0 0 0-1.3 1.916l1.848 9.642a1.636 1.636 0 0 0 1.915 1.3L19.1 14.248M2.455 5.932h18"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CreditCardSvg;
