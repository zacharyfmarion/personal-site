import * as React from 'react';
import Link from 'next/link';
import { Text, Flex, Container } from 'rebass';
import styled, { css } from 'styled-components';
import media from 'utils/media';

const Footer = ({ author }) => (
  <Flex justifyContent="center" px={4} py={4}>
    <FooterContainer>
      <Flex alignItems="center">
        <Text>
          <a href="http://zacharyfmarion.io">{author}</a> © 2018
        </Text>
      </Flex>
      <LinkContainer alignItems="center">
        <Link href="/">Latest Posts</Link>
        <a href="https://github.com/zacharyfmarion" target="_blank">
          Github
        </a>
        <a href="https://twitter.com/ZacharyMarion3" target="_blank">
          Twitter
        </a>
      </LinkContainer>
    </FooterContainer>
  </Flex>
);

const LinkContainer = styled(Flex)`
  a {
    color: inherit;
    background-color: transparent;
    font-size: 14px;
    font-weight: 700;
    padding: 8px;
    display: inline-flex;
    align-items: center;
    align-self: stretch;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
  }
`;

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  min-height: 75px;
  flex: 1 1 auto;

  & > p,
  div {
    font-family: 'Noto Sans', sans-serif;
  }

  ${media.mobile`
    flex-direction: column;
    align-items: center;
  `};
`;

export default Footer;
