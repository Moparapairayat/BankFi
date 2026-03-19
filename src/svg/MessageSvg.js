import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MessageSvg = () => (
  <Svg width={16} height={16} fill="none">
    <Path
      d="M14 7.667a5.587 5.587 0 0 1-.6 2.533 5.666 5.666 0 0 1-5.067 3.133 5.588 5.588 0 0 1-2.533-.6L2 14l1.267-3.8a5.586 5.586 0 0 1-.6-2.533A5.667 5.667 0 0 1 5.8 2.6 5.587 5.587 0 0 1 8.333 2h.334A5.654 5.654 0 0 1 14 7.333v.334Z"
      stroke="#4C4C60"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MessageSvg;
