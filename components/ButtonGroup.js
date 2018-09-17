import * as React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

const ButtonGroup = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled(Flex)`
  button {
    border-radius: 0;
    border-right: none;
    border-left: none;
  }
  button:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-left: 1px solid lightgray;
  }
  button:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right: 1px solid lightgray;
  }
`;

export default ButtonGroup;
