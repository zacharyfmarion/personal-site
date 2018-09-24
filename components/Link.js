import * as React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const Link = ({ color, ...props }) => (
  <LinkContainer color={color}>
    <NextLink {...props} />
  </LinkContainer>
);

const LinkContainer = styled.div`
  display: inline-flex;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${p => p.color || '#fff'};
  }
`;

export default Link;
