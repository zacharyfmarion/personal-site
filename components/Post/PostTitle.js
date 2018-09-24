import * as React from 'react';
import Header from '../Header';

const PostTitle = ({ date, ...props }) => (
  <Header {...props} mb={4} subtitle={date} />
);

export default PostTitle;
