import * as React from 'react';
import styled from 'styled-components';
import { Flex, Container } from 'rebass';

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
        <PostPreviewsWrapper>
          {this.relatedPosts.map(postTitle => (
            <PostPreview key={postTitle} noMargin {...postsMetas[postTitle]} />
          ))}
        </PostPreviewsWrapper>
      </PostsContainer>
    );
  }
}

const PostPreviewsWrapper = styled(Container)`
  display: flex;
`;

const PostsContainer = styled(Flex)`
  flex: 1 1 auto;
  background-color: #f4f8fb;
`;

export default RelatedPosts;
