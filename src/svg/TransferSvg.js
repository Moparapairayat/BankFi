import * as React from 'react';
import Svg, {Rect, Path, Defs} from 'react-native-svg';

const TransferSvg = () => (
  <Svg width={40} height={40} fill="none">
    <Rect width={40} height={40} rx={20} fill="#F1F5FD" />
    <Path
      d="M16.207 19.757a.998.998 0 0 1 0 1.415L14.38 23H24a1 1 0 1 1 0 2h-9.62l1.828 1.828a1 1 0 0 1-1.414 1.415l-3.536-3.536a1 1 0 0 1 0-1.414l3.536-3.536a1 1 0 0 1 1.414 0Zm7.586-8a1 1 0 0 1 1.32-.083l.094.083 3.536 3.536a1 1 0 0 1 .083 1.32l-.083.094-3.536 3.535a1 1 0 0 1-1.497-1.32l.083-.094L25.62 17H16a1 1 0 0 1-.117-1.993L16 15h9.621l-1.828-1.83a1 1 0 0 1 0-1.414v.001Z"
      fill="#55ACEE"
    />
    <Defs>
      <Path fill="#fff" transform="translate(8 8)" d="M0 0h24v24H0z" />
    </Defs>
  </Svg>
);

export default TransferSvg;
