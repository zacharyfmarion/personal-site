import * as React from 'react';
import Link from 'next/link';
import { Flex, Heading, Text, Image } from 'rebass';
import styled from 'styled-components';

const PostPreview = ({ title, description, link, readTime }) => {
  return (
    <Link href={link || '/not-found'}>
      <PostWrapper bg="white">
        <FlexImage src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
        <Flex flexDirection="column" p={4}>
          <MainContent flexDirection="column">
            <Heading is="h4" pb={3}>
              {title}
            </Heading>
            <Text fontSize={18}>{description}</Text>
          </MainContent>
          <Flex justifyContent="space-between">
            <Text>{readTime} minute read</Text>
          </Flex>
        </Flex>
      </PostWrapper>
    </Link>
  );
};

const MainContent = styled(Flex)`
  flex: 1 1 auto;
`;

const PostWrapper = styled(Flex)`
  border-radius: 5px;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 260px;
  cursor: pointer;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07),
      1px 6px 12px rgba(39, 44, 49, 0.04);
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`;

const FlexImage = styled(Image)`
  height: 300px;
  border-radius: 5px 0 0 5px;
`;

export default PostPreview;
