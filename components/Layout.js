import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PostPreview from './PostPreview';
import styled from 'styled-components';
import { Flex, Container } from 'rebass';

const globalStyles = `
  body {
    margin: 0;
  }
`;

const description = `I've been playing a lot of chess recently, and it has gotten me interested in how the game should optimally be played. In college I took an intro to AI course, and one`;

const Layout = ({ children }) => (
  <Flex flexDirection="column">
    <Head>
      <style>{globalStyles}</style>
    </Head>
    <Header title="Zachary Marion" subtitle="Thoughts, code and ideas." />
    <PostContainer>
      <PostPreview title="Minimax" description={description} readTime={6} />
      <PostPreview title="Minimax" description={description} readTime={6} />
      <PostPreview title="Minimax" description={description} readTime={6} />
      {children}
    </PostContainer>
    <Footer author="Zachary Marion" />
  </Flex>
);

const PostContainer = styled(Container)`
  margin-top: -100px;
`;

export default Layout;
