import * as React from 'react';
import { Flex, Heading } from 'rebass';
import styled from 'styled-components';
import BackIcon from '../assets/arrow-left.svg';

const Header = ({ title, subtitle, bg, onBack, ...props }) => (
  <HeaderBox
    px={4}
    py={5}
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    color="white"
    bg={bg}
    {...props}
  >
    {onBack && <StyledBackIcon onClick={onBack} />}
    <Heading is="h1" textAlign="center" fontSize={[4, 5, 6]}>
      {title}
    </Heading>
    <Heading is="h6" textAlign="center" fontWeight={400} fontSize={28}>
      {subtitle}
    </Heading>
  </HeaderBox>
);

const StyledBackIcon = styled(BackIcon)`
  cursor: pointer;
`;

const HeaderBox = styled(Flex)`
  height: 400px;
`;

export default Header;
