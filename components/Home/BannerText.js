import * as React from 'react';
import MtSvgLines from 'react-mt-svg-lines';

import BannerTextSvg from '../assets/banner-text.svg';

const BannerText = ({ className }) => (
  <MtSvgLines animate={true} duration={2000} className={className}>
    <BannerTextSvg />
  </MtSvgLines>
);

export default BannerText;
