import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TypeCardSvg = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M15 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M1 10h8m14 0h-8"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.75 1.5a.75.75 0 0 0-1.5 0h1.5Zm-1.28 17.03a.75.75 0 0 0 1.06 0l4.773-4.773a.75.75 0 0 0-1.06-1.06L12 16.939l-4.243-4.242a.75.75 0 1 0-1.06 1.06l4.773 4.773ZM11.25 1.5V18h1.5V1.5h-1.5Z"
      fill="#fff"
    />
  </Svg>
);

export default TypeCardSvg;
