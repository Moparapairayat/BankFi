import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CalendarSvg = () => (
  <Svg width={16} height={16} fill="none">
    <Path
      d="M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333ZM2 6.667h12M10.667 1.333V4M5.333 1.333V4"
      stroke="#1B1D4D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CalendarSvg;
