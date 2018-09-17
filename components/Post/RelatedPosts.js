import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

import { posts } from 'pages/posts';
import Card from '../Card';
import getRelatedPost from '../../utils/getRelatedPost';

class RelatedPosts extends React.Component {
  get relatedPost() {
    return getRelatedPost(posts, this.props.title);
  }

  render() {
    return this.relatedPost ? (
      <PostsContainer py={4}>
        <PostPreviewsWrapper px={4} alignItems="center" justifyContent="center">
          <Card noMargin {...this.relatedPost} />
        </PostPreviewsWrapper>
      </PostsContainer>
    ) : (
      <div />
    );
  }
}

const PostPreviewsWrapper = styled(Flex)`
  display: flex;
  flex: 1 1 auto;
  margin: auto;
  max-width: 1024px;
`;

const PostsContainer = styled(Flex)`
  flex: 1 1 auto;
  background-color: #f4f8fb;
`;

export default RelatedPosts;
