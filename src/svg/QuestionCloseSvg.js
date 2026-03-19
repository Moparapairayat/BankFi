import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const QuestionCloseSvg = () => (
  <Svg width={11} height={7} fill="none">
    <Path
      d="M1.429 5.286 5.714 1 10 5.286"
      stroke="#FF5887"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default QuestionCloseSvg;
