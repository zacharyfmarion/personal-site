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
      {/* <Title fontSize={8}>Z.</Title> */}
      <Title fontSize={8}>Zachary Marion</Title>
      {/* <SocialContainer>
        <ResumeButton href="/static/home/resume.pdf" download>
          Resume
        </ResumeButton>
      </SocialContainer> */}
      <DownIcon />
    </BannerWrapper>
  );
};

const ResumeButton = styled.a`
  padding: 10px 20px;
  text-decoration: none;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 4px;
`;

const SocialContainer = styled(Flex)``;

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
  position: relative;
  color: #fff;
  font-weight: 700;
  z-index: 1;
  padding-bottom: 15px;
  margin-bottom: 25px;
`;

const Subtitle = styled(Text)`
  color: ${p => p.theme.colors.primary};
  font-weight: 400;
  z-index: 1;
`;

const BannerWrapper = styled(Flex)`
  position: relative;
  flex: 1 0 auto;
  min-height: 100vh;
  height: 100vh;
  background: ${p => p.theme.colors.dark};
  text-align: center;
`;

export default Banner;
