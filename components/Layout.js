import React from 'react';
import Head from 'next/head';
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

const Layout = ({ children, title, subtitle, className, posts = [] }) => (
  <Wrapper flexDirection="column" className={className}>
    <Head>
      <style>{globalStyles}</style>
    </Head>
    <Header
      hideTitleBackground
      title={title}
      subtitle={subtitle}
      backText="Back to home"
    />
    <PostContainer className="layout__post-container">
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
  z-index: 0;
`;

export default Layout;
