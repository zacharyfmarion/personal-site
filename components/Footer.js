import * as React from 'react';
import Link from 'next/link';
import { Text, Flex, Container } from 'rebass';
import styled, { css } from 'styled-components';
import media from 'utils/media';

const Footer = ({ author, dark }) => (
  <FooterWrapper justifyContent="center" px={4} py={4} dark={dark}>
    <FooterContainer>
      <Flex alignItems="center">
        <Text fontSize={1}>
          <BrowserLink href="http://zacharyfmarion.io">{author}</BrowserLink>©
          2018
        </Text>
      </Flex>
      <LinkContainer alignItems="center">
        <Link href="/posts">Latest Posts</Link>
        <BrowserLink href="https://github.com/zacharyfmarion" target="_blank">
          Github
        </BrowserLink>
        <BrowserLink href="https://twitter.com/ZacharyMarion3" target="_blank">
          Twitter
        </BrowserLink>
      </LinkContainer>
    </FooterContainer>
  </FooterWrapper>
);

const FooterWrapper = styled(Flex)`
  ${p =>
    p.dark &&
    `
    background: ${p.theme.colors.dark};
    color: #fff;
  `};
`;

const linkStyles = css`
  color: inherit;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  padding: 8px;
  display: inline-flex;
  align-items: center;
  align-self: stretch;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
`;

const LinkContainer = styled(Flex)`
  a {
    ${linkStyles};
  }
`;

const BrowserLink = styled.a`
  ${linkStyles};
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
