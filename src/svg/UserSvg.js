import * as React from 'react';
import Svg, {Rect, Ellipse, Circle, Defs, Stop} from 'react-native-svg';

const UserSvg = () => (
  <Svg width={22} height={22} fill="none">
    <Rect width={22} height={22} rx={11} fill="url(#b)" fillOpacity={0.5} />
    <Ellipse cx={11} cy={18} rx={7} ry={5} fill="#3B5999" />
    <Circle cx={11} cy={9} r={4} fill="#3B5999" />
    <Rect
      x={0.5}
      y={0.5}
      width={21}
      height={21}
      rx={10.5}
      stroke="#fff"
      strokeOpacity={0.3}
    />
    <Defs>
      <Stop stopColor="#fff" />
      <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      <Rect width={22} height={22} rx={11} fill="#fff" />
    </Defs>
  </Svg>
);

export default UserSvg;
