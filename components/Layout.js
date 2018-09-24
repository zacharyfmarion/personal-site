import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Header from './Header';
import Paginate from './Paginate';
import Footer from './Footer';
import { PostPreview } from './Post';
import styled from 'styled-components';
import { Flex, Container } from 'rebass';

// Posts

const globalStyles = `
  body {
    margin: 0;
  }
`;

const storePageNumber = () => {};

const Layout = ({ children, title, subtitle, posts = [] }) => (
  <Wrapper flexDirection="column">
    <Head>
      <style>{globalStyles}</style>
    </Head>
    <Header
      hideTitleBackground
      title={title}
      subtitle={subtitle}
      onBack={() => Router.push('/')}
      backText="Back to home"
    />
    <PostContainer>
      <Paginate
        items={posts}
        itemsPerPage={5}
        backText="Newer Posts"
        forwardText="Older Posts"
      >
        {({ activeItems, pageNumber }) => {
          storePageNumber(pageNumber);
          return activeItems.map(post => <PostPreview {...post} />);
        }}
      </Paginate>
      {children}
    </PostContainer>
    <Footer author="Zachary Marion" />
  </Wrapper>
);

const Wrapper = styled(Flex)`
  min-height: 100vh;
`;

const PostContainer = styled(Container)`
  margin-top: -100px;
  max-width: 850px !important;
  flex: 1 1 auto;
  width: 100%;
  z-index: 1;
`;

export default Layout;
