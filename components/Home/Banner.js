import * as React from 'react';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import media from '@/utils/media';
import config from './particles';
import Down from '../assets/down.svg';

const Banner = () => {
  const scrollDown = () => window.scrollTo(0, window.innerHeight - 60);
  return (
    <BannerWrapper
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <StyledParticles params={config} />
      <Title fontSize={8}>Welcome!</Title>
      {/* <Subtitle fontSize={5}></Subtitle> */}
      <DownIcon onClick={scrollDown} />
    </BannerWrapper>
  );
};

const DownIcon = styled(Down)`
  position: absolute;
  bottom: 15px;
  width: 40px;
  height: 40px;
  fill: #fff;
  cursor: pointer;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  ${media.mobile`
    display: none; 
  `};
`;

const Title = styled(Text)`
  position: relative;
  color: #fff;
  font-weight: 700;
  z-index: 1;
  padding-bottom: 10px;

  ${media.tablet`
    font-size: 48px; 
  `};

  ${media.mobile`
    font-size: 38px; 
  `};
`;

const Subtitle = styled(Text)`
  color: #888;
  font-weight: 400;
  z-index: 1;

  ${media.mobile`
    font-size: 24px; 
  `};
`;

const BannerWrapper = styled(Flex)`
  position: relative;
  flex: 1 0 auto;
  min-height: 100vh;
  height: 100vh;
  background: ${p => p.theme.colors.dark};
  text-align: center;
  z-index: 0;
`;

export default Banner;
