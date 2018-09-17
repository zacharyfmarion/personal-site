import * as React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

const Timeline = ({ children }) => {
  return <TimelineWrapper flexDirection="column">{children}</TimelineWrapper>;
};

const TimelineWrapper = styled(Flex)`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 303px;
    right: auto;
    height: 100%;
    width: 3px;
    background: ${p => p.theme.colors.primary};
    z-index: 0;
  }
  &::after {
    position: absolute;
    content: '';
    width: 3px;
    height: 33px;
    background: ${p => p.theme.colors.primary};
    background: linear-gradient(
      to bottom,
      ${p => p.theme.colors.primary},
      rgba(52, 152, 219, 0)
    );
    top: 100%;
    left: 303px;
  }
`;

export default Timeline;
