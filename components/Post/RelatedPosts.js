import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

import * as postsMetas from 'pages/posts';
import PostPreview from '../PostPreview';

class RelatedPosts extends React.Component {
  get relatedPosts() {
    return Object.keys(postsMetas)
      .filter(key => postsMetas[key].title !== this.props.title)
      .slice(0, 2);
  }

  render() {
    return (
      <PostsContainer py={4}>
        <PostPreviewsWrapper px={4} alignItems="center" justifyContent="center">
          {this.relatedPosts.map(postTitle => (
            <PostPreview key={postTitle} noMargin {...postsMetas[postTitle]} />
          ))}
        </PostPreviewsWrapper>
      </PostsContainer>
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
