import * as React from 'react';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';

const PostHeader = ({ title, bg }) => (
  <Flex bg="blue" color="white" p={3} justifyContent="center">
    <HeaderContainer>
      <Text fontSize={20}>{title}</Text>
    </HeaderContainer>
  </Flex>
);

const HeaderContainer = styled(Flex)`
  flex: 1 1 auto;
  max-width: 1024px;
  padding-left: 16px;
  padding-right: 16px;
`;

export default PostHeader;
