import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const EditPhotoSvg = () => (
  <Svg width={24} height={20} fill="none">
    <Path
      d="M23 17a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EditPhotoSvg;
