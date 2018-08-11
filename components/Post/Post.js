import * as React from 'react';
import Head from 'next/head';
import PostTitle from './PostTitle';
import Footer from '../Footer';
import { Flex, Container } from 'rebass';
import styled, { css } from 'styled-components';

const globalStyles = `
  body {
    margin: 0;
  }
`;

const Post = ({ children }) => {
  return (
    <Flex flexDirection="column">
      <Head>
        <style>{globalStyles}</style>
      </Head>
      {/* TODO: Put this info in the post meta */}
      <PostTitle title="Minimax" date="07/22/2018" bg="blue" />
      <PostContainer bg="white">{children}</PostContainer>
      <Footer author="Zachary Marion" />
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
