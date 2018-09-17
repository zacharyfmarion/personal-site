import * as React from 'react';
import { Flex, Text, Container } from 'rebass';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import config from './particles';
import Down from '../assets/down.svg';

const Banner = () => {
  return (
    <BannerWrapper
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {/* <StyledParticles params={config} /> */}
      {/* <Header>
        <Logo />
      </Header> */}
      <Title fontSize={8}>Z.</Title>
      <DownIcon />
    </BannerWrapper>
  );
};

const DownIcon = styled(Down)`
  position: absolute;
  bottom: 15px;
  width: 40px;
  height: 40px;
  fill: #fff;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Header = styled(Flex)`
  position: absolute;
  top: 0;
  width: 100%;
  flex: 1 1 auto;
  padding: 25px 50px;

  svg {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled(Text)`
  font-family: 'Frank Ruhl Libre', serif;
  color: #fff;
`;

const BannerWrapper = styled(Flex)`
  position: relative;
  flex: 1 0 auto;
  min-height: 100vh;
  height: 100vh;
  background: ${p => p.theme.colors.dark};
`;

export default Banner;
