import * as React from 'react';
import Header from '../Header';
import Router from 'next/router';

const PostTitle = ({ date, ...props }) => (
  <Header {...props} mb={4} subtitle={date} onBack={() => Router.push('/')} />
);

export default PostTitle;
