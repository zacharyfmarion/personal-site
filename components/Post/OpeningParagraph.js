import * as React from 'react';
import { Paragraph } from '@/mdx-components';
import styled from 'styled-components';

/**
 * Opening paragraph is larger than the rest
 */

const OpeningParagraph = ({ children, ...props }) => (
  <OpeningText {...props}>{children}</OpeningText>
);

const OpeningText = styled(Paragraph)`
  word-break: break-word;
  word-wrap: break-word;
  margin-bottom: 25px;

  &:first-child:first-letter {
    float: left;
    font-family: cursive, Georgia;
    font-style: normal;
    font-size: 78px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 9px;
    padding-left: 3px;
  }
`;

export default OpeningParagraph;
