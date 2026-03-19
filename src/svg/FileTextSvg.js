import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FileTextSvg = () => (
  <Svg width={16} height={16} fill="none">
    <Path
      d="M9.333 1.333H4a1.333 1.333 0 0 0-1.333 1.334v10.666A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.333-1.334v-8l-4-4ZM10.667 11.333H5.333M10.667 8.667H5.333M6.667 6H5.333"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.333 1.333v4h4"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FileTextSvg;
