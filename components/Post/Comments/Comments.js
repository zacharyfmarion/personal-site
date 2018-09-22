import * as React from 'react';
import { Container } from 'rebass';
import styled from 'styled-components';

import Comment from './Comment';

class Comments extends React.Component {
  render() {
    return (
      <CommentsWrapper>
        <Comment
          author="Zachary Marion"
          comment="This is a simple comment that allows me to see exactly what it would look like if shown to a user on the site."
        />
      </CommentsWrapper>
    );
  }
}

const CommentsWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
`;

export default Comments;
