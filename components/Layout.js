import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { Flex, Container } from 'rebass';

// Posts

const globalStyles = `
  body {
    margin: 0;
  }
`;

const Layout = ({ children }) => (
  <Wrapper flexDirection="column">
    <Head>
      <style>{globalStyles}</style>
    </Head>
    <Header
      title="Zachary Marion"
      subtitle="Thoughts, code and ideas."
      bg="blue"
    />
    <PostContainer>{children}</PostContainer>
    <Footer author="Zachary Marion" />
  </Wrapper>
);

const Wrapper = styled(Flex)`
  min-height: 100vh;
`;

const PostContainer = styled(Container)`
  margin-top: -100px;
  flex: 1 1 auto;
  z-index: 1;
`;

export default Layout;
