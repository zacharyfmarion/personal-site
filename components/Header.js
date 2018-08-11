import * as React from 'react';
import { Flex, Heading } from 'rebass';
import styled from 'styled-components';

const Header = ({ title, subtitle }) => (
  <HeaderBox
    px={4}
    py={5}
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    color="white"
    bg="blue"
  >
    <Heading is="h1" textAlign="center" fontSize={[4, 5, 6]}>
      {title}
    </Heading>
    <Heading is="h6" textAlign="center" fontWeight={400} fontSize={28}>
      {subtitle}
    </Heading>
  </HeaderBox>
);

const HeaderBox = styled(Flex)`
  min-height: 400px;
`;

export default Header;
