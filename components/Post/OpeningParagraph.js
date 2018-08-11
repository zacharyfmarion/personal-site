import * as React from 'react';
import { Text } from 'rebass';

/**
 * Opening paragraph is larger than the rest
 */

const OpeningParagraph = ({ children, ...props }) => (
  <Text fontSize={25} lineHeight={1.5} {...props}>
    {children}
  </Text>
);

export default OpeningParagraph;
