import * as React from 'react';
import { Container, Heading, Text } from 'rebass';
import styled from 'styled-components';

const Comment = ({ author, comment }) => {
  return (
    <CommentWrapper flexDirection="column">
      <Heading is="h5" fontSize={16}>
        {author}
      </Heading>
      <Text>{comment}</Text>
    </CommentWrapper>
  );
};

const CommentWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`;

export default Comment;
