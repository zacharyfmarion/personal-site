import * as React from 'react';
import { NavLink, Text, Flex, Container } from 'rebass';
import styled from 'styled-components';

const Footer = ({ author }) => (
  <Flex justifyContent="center" px={4} py={4}>
    <FooterContainer>
      <Flex alignItems="center">
        <Text>{author} © 2018</Text>
      </Flex>
      <Flex>
        <NavLink href="">Latest Posts</NavLink>
        <NavLink href="#">Twitter</NavLink>
        <NavLink href="#">Facebook</NavLink>
      </Flex>
    </FooterContainer>
  </Flex>
);

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  min-height: 75px;
  flex: 1 1 auto;
  & > p,
  div {
    font-family: 'Noto Sans', sans-serif;
  }
`;

export default Footer;
