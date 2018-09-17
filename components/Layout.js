import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Header from './Header';
import Paginate from './Paginate';
import Footer from './Footer';
import Card from './Card';
import styled from 'styled-components';
import { Flex, Container } from 'rebass';

// Posts

const globalStyles = `
  body {
    margin: 0;
  }
`;

const storePageNumber = () => {};

const Layout = ({ posts }) => (
  <Wrapper flexDirection="column">
    <Head>
      <style>{globalStyles}</style>
    </Head>
    <Header
      hideTitleBackground
      title="Zachary Marion"
      subtitle="Thoughts, code and ideas."
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
          return activeItems.map(post => <Card {...post} />);
        }}
      </Paginate>
    </PostContainer>
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
