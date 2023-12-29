import * as React from 'react';
import { Flex, Text, Container } from 'rebass';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import Link from '@/components/Link';
import BannerText from './BannerText';
import config from './particles';
import Down from '../assets/down.svg';
import Logo from '../assets/logo.svg';

class BannerAlt extends React.Component {
  state = {
    paddingVertical: 25,
    maxWidth: 1024,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const newWidth = window.innerWidth * (window.pageYOffset / 25);
      let maxWidth;
      if (newWidth > window.innerWidth) maxWidth = window.innerWidth;
      else if (newWidth < 1024) maxWidth = 1024;
      else maxWidth = newWidth;
      this.setState({
        maxWidth,
        paddingVertical: Math.max(25 - window.pageYOffset, 0),
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <BannerWrapper
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <BannerContainer>
          <Header {...this.state}>
            <Links
              justifyContent="space-between"
              alignItems="center"
              noRadius={this.state.paddingVertical === 0}
            >
              {/* <Logo /> */}
              <Flex />
              <LinkContainer>
                <Link href="/">Home</Link>
                <Link href="/posts">Blog</Link>
              </LinkContainer>
            </Links>
          </Header>
          {/* <StyledBannerText /> */}
          <SubtitleContainer />
          {/* <DownIcon /> */}
        </BannerContainer>
      </BannerWrapper>
    );
  }
}

// const StyledBannerText = styled(BannerText)`
//   position: absolute;
//   left: 50px;
//   right: 50px;

//   svg {
//     width: 100%;
//     height: 200px;
//   }
// `;

const Links = styled(Flex)`
  flex: 1 1 auto;
  padding: 20px;
  border-radius: ${p => (p.noRadius ? '0' : '25px')};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  transition: all 0.2s linear;

  svg {
    width: 30px;
    height: 30px;
  }
`;

const LinkContainer = styled(Flex)`
  > div {
    margin-right: 25px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const SubtitleContainer = styled(Flex)`
  color: #ddd;
`;

const BannerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

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

const Header = styled(Container)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  max-width: ${p => p.maxWidth}px;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  flex: 1 1 auto;
  padding: ${p => p.paddingVertical}px 0;

  svg {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled(Text)`
  align-self: flex-start;
  color: #fff;
  font-weight: 800;
  max-width: 70%;
`;

const BannerWrapper = styled(Flex)`
  position: relative;
  flex: 1 0 auto;
  min-height: 100vh;
  height: 100vh;
  background: ${p => p.theme.colors.dark};
`;

export default BannerAlt;
