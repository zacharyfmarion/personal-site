import * as React from 'react';
import { NavLink, Text, Flex } from 'rebass';
import styled from 'styled-components';

const Footer = ({ author, twitterUrl, facebookUrl }) => (
  <Flex bg="blue" justifyContent="center" px={4} py={2}>
    <FooterContainer justifyContent="space-between" color="white">
      <Flex alignItems="center">
        <Text>{author} © 2018</Text>
      </Flex>
      <Flex>
        <NavLink href="#">Latest Posts</NavLink>
        <NavLink href={twitterUrl}>Twitter</NavLink>
        <NavLink href={facebookUrl}>Facebook</NavLink>
      </Flex>
    </FooterContainer>
  </Flex>
);

const FooterContainer = styled(Flex)`
  max-width: 1024px;
  min-height: 75px;
  flex: 1 1 auto;
`;

export default Footer;
