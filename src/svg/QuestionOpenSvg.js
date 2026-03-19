import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const QuestionOpenSvg = () => (
  <Svg width={11} height={7} fill="none">
    <Path
      d="m1.429 1.429 4.285 4.285L10 1.43"
      stroke="#4C4C60"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default QuestionOpenSvg;
