import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Container, Flex, Heading } from 'rebass';

const Menu = () => {
  const scrollToBottom = () => window.scrollTo(0, document.body.scrollHeight);
  return (
    <MenuWrapper bg="#fff">
      <MenuContainer>
        <Heading fontSize={18}>
          <MenuLink>
            <Link href="/">Zachary Marion</Link>
          </MenuLink>
        </Heading>
        <Flex alignItems="center">
          <MenuLink>
            <a onClick={scrollToBottom}>Contact</a>
          </MenuLink>
          <MenuLink>
            <Link href="/demos">Demos</Link>
          </MenuLink>
          <MenuLink>
            <Link href="/posts">Blog</Link>
          </MenuLink>
        </Flex>
      </MenuContainer>
    </MenuWrapper>
  );
};

const MenuLink = styled(Flex)`
  a {
    text-decoration: none;
    color: black;
    margin: 0 10px;
    padding-bottom: 4px;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid ${p => p.theme.colors.primary};
    }
  }
`;

const MenuWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
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
