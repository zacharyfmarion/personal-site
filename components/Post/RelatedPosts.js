import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

import * as postMetas from 'pages/posts';
import PostPreview from '../PostPreview';
import getRelatedPost from '../../utils/getRelatedPost';

class RelatedPosts extends React.Component {
  get relatedPost() {
    return getRelatedPost(Object.values(postMetas), this.props.title);
  }

  render() {
    return (
      this.relatedPost && (
        <PostsContainer py={4}>
          <PostPreviewsWrapper
            px={4}
            alignItems="center"
            justifyContent="center"
          >
            <PostPreview noMargin {...this.relatedPost} />
          </PostPreviewsWrapper>
        </PostsContainer>
      )
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
