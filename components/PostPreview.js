import * as React from 'react';
import Link from 'next/link';
import { Flex, Heading, Text, BackgroundImage } from 'rebass';
import styled from 'styled-components';
import trimDescription from 'utils/trimDescription';
import media from 'utils/media';

const PostPreview = ({
  title,
  description,
  image,
  link,
  readTime,
  noMargin,
}) => {
  return (
    <Link href={`/posts${link}` || '/not-found'}>
      <PostWrapper bg="white" noMargin={noMargin}>
        <FlexImage src={image} />
        <ContentWrapper flexDirection="column" p={4}>
          <MainContent flexDirection="column">
            <Heading is="h4" pb={3}>
              {title}
            </Heading>
            <Text fontSize={18}>{trimDescription(description, 100)}</Text>
          </MainContent>
          <Flex justifyContent="space-between">
            <Text>{readTime} minute read</Text>
          </Flex>
        </ContentWrapper>
      </PostWrapper>
    </Link>
  );
};

const ContentWrapper = styled(Flex)`
  flex: 0 1 350px;

  ${media.mobile`
    flex: 1 1 auto;
  `};
`;

const MainContent = styled(Flex)`
  flex: 1 1 auto;
`;

const PostWrapper = styled(Flex)`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  ${p => !p.noMargin && `margin-bottom: 40px`};
  min-height: 260px;
  max-height: 300px;
  cursor: pointer;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  background-size: cover;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07),
      1px 6px 12px rgba(39, 44, 49, 0.04);
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`;

const FlexImage = styled(Flex)`
  flex: 1 1 auto;
  border-radius: 5px 0 0 5px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  background-image: url(${p => p.src});

  ${media.mobile`
    display: none;
  `};
`;

export default PostPreview;
