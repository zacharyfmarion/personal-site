import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Container, Flex, Heading } from 'rebass';

import media from 'utils/media';
import ScrollOffset from 'components/ScrollOffset';
import MenuIcon from './assets/menu.svg';

class Menu extends React.Component {
  state = {
    open: false,
  };

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  scrollToBottom = () => window.scrollTo(0, document.body.scrollHeight);

  render() {
    const { light, dark } = this.props;
    const getBackground = offset => {
      if (light || offset > 0) return 'light';
      if (dark) return 'dark';
      return 'transparent';
    };
    return (
      <ScrollOffset>
        {offsetTop => (
          <MenuWrapper bg="#fff" background={getBackground(offsetTop)}>
            <MenuContainer>
              <Heading fontSize={18}>
                <MenuLink>
                  <Link href="/">Zachary Marion</Link>
                </MenuLink>
              </Heading>
              <MobileMenuIcon
                background={getBackground(offsetTop)}
                onClick={this.toggleMenu}
              />
              <LinksContainer
                alignItems="center"
                open={this.state.open}
                onClick={this.toggleMenu}
              >
                <MenuLink>
                  <a onClick={this.scrollToBottom}>Contact</a>
                </MenuLink>
                <MenuLink>
                  <Link href="/demos">Demos</Link>
                </MenuLink>
                <MenuLink>
                  <Link href="/posts">Blog</Link>
                </MenuLink>
              </LinksContainer>
            </MenuContainer>
          </MenuWrapper>
        )}
      </ScrollOffset>
    );
  }
}

const MobileMenuIcon = styled(MenuIcon)`
  display: none;
  cursor: pointer;

  ${media.mobile`
    display: block;

    fill: ${({ background }) => {
      switch (background) {
        case 'light':
          return `#000`;
        case 'dark':
          return `#fff`;
        case 'transparent':
          return `#fff`;
      }
    }};
  `};
`;

const LinksContainer = styled(Flex)`
  ${media.mobile`
    display: ${p => (p.open ? 'block' : 'none')};
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: #fff;
    padding: 15px;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);

    & > div > a {
      color: #000 !important;
    }
  `};
`;

const MenuLink = styled(Flex)`
  a {
    text-decoration: none;
    margin: 0 10px;
    padding-bottom: 4px;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid ${p => p.theme.colors.primary};
    }
  }

  ${media.mobile`
    padding: 10px;
    font-size: 1.3em;
  `};
`;

const MenuWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  ${({ background, theme }) => {
    switch (background) {
      case 'light':
        return `
          box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);
          background: #fff;
          a { color: #000 !important; }
        `;
      case 'dark':
        return `
          box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);
          background: ${theme.colors.dark};
          a { color: #fff !important; }
        `;
      case 'transparent':
        return `
          background: transparent;
          a { color: #fff !important; }
        `;
    }
  }} transition: all 0.3s linear;
`;

const MenuContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  min-height: 60px;
  flex: 1 1 auto;
`;

export default Menu;
