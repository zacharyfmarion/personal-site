import * as React from 'react';
import Header from '../Header';
import Router from 'next/router';

const PostTitle = ({ link, ...props }) => (
  <Header {...props} mb={4} onBack={() => Router.push(link)} />
);

export default PostTitle;
