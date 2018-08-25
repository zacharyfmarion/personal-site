import * as React from 'react';
import Head from 'next/head';
import { Flex, Container } from 'rebass';
import styled, { css } from 'styled-components';

import PostTitle from './PostTitle';
import RelatedPosts from './RelatedPosts';
import Footer from '../Footer';

const globalStyles = `
  body {
    margin: 0;
  }
`;

const Post = ({ children, title, image, date, author }) => {
  return (
    <Flex flexDirection="column">
      <Head>
        <style>{globalStyles}</style>
      </Head>
      <PostTitle title={title} date={date} image={image} />
      <PostContainer bg="white">{children}</PostContainer>
      <RelatedPosts title={title} />
      <Footer author={author} />
    </Flex>
  );
};

const psuedoStyles = css`
  content: '';
  position: absolute;
  top: 15px;
  z-index: -1;
  display: block;
  width: 20px;
  height: 200px;
  background: rgba(39, 44, 49, 0.15);
  filter: blur(5px);
`;

const PostContainer = styled(Container)`
  position: relative;
  margin-top: -100px;
  border-radius: 4px;
  min-height: 230px;
  width: 100%;
  padding: 40px !important;
  &:before {
    ${psuedoStyles} left: -5px;
    transform: rotate(-5deg);
  }
  &:after {
    ${psuedoStyles} right: -5px;
    transform: rotate(5deg);
  }
`;

export default Post;
