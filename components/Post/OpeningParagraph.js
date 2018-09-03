import * as React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';

/**
 * Opening paragraph is larger than the rest
 */

const OpeningParagraph = ({ children, ...props }) => (
  <OpeningText fontSize={25} lineHeight={1.5} {...props}>
    {children}
  </OpeningText>
);

const OpeningText = styled(Text)`
  word-break: break-word;
  word-wrap: break-word;
  margin-bottom: 25px;
  font-style: italic;

  &:first-child:first-letter {
    float: left;
    font-family: Georgia;
    font-style: normal;
    font-size: 78px;
    line-height: 66px;
    padding-top: 4px;
    padding-right: 5px;
    padding-left: 3px;
  }
`;

export default OpeningParagraph;
