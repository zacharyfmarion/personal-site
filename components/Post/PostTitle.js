import * as React from 'react';
import Header from '../Header';

const PostTitle = ({ title, date, bg }) => (
  <Header title={title} subtitle={date} bg={bg} mb={4} />
);

export default PostTitle;
