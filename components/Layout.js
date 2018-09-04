import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Paginate from './Paginate';
import Footer from './Footer';
import PostPreview from './Post/PostPreview';
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
    />
    <PostContainer>
      <Paginate
        items={posts}
        itemsPerPage={2}
        backText="Newer Posts"
        forwardText="Older Posts"
      >
        {({ activeItems, pageNumber }) => {
          storePageNumber(pageNumber);
          return activeItems.map(post => <PostPreview {...post} />);
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
