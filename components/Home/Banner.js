import * as React from 'react';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';

const Banner = () => {
  return (
    <Container alignItems="center" justifyContent="center">
      <Title fontSize={8}>Z.</Title>
    </Container>
  );
};

const Title = styled(Text)`
  color: #fff;
`;

const Container = styled(Flex)`
  flex: 1 0 auto;
  min-height: 100vh;
  height: 100vh;
  background: #0e1b25;
`;

export default Banner;
