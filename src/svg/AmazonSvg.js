import * as React from 'react';
import Svg, {Rect, Path, Defs, Use, Image} from 'react-native-svg';

const AmazonSvg = () => (
  <Svg width={40} height={40} fill="none">
    <Rect width={40} height={40} rx={20} fill="#F1F5FD" />
    <Path fill="url(#a)" d="M5 8h30v24.674H5z" />
    <Defs>
      <Use xlinkHref="#b" transform="scale(.0009 .00108)" />
      <Image id="b" width={1121} height={922} />
    </Defs>
  </Svg>
);

export default AmazonSvg;
