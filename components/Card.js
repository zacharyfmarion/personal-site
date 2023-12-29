import * as React from 'react';
import { Flex, Heading, Text, BackgroundImage } from 'rebass';
import styled from 'styled-components';
import trimDescription from '@/utils/trimDescription';
import media from '@/utils/media';

const Card = ({ title, description, image, children, onClick, noMargin }) => {
  return (
    <PostWrapper bg="white" noMargin={noMargin} onClick={onClick}>
      <FlexImage src={image} />
      <ContentWrapper flexDirection="column" p={4}>
        <MainContent flexDirection="column">
          <CardTitle is="h4" fontSize={24} pb={3}>
            {title}
          </CardTitle>
          <Description fontSize={18}>
            {trimDescription(description, 100)}
          </Description>
        </MainContent>
        <ChildContent justifyContent="space-between">{children}</ChildContent>
      </ContentWrapper>
    </PostWrapper>
  );
};

const ChildContent = styled(Flex)`
  ${media.mobile`
    display: none;
  `};
`;

const CardTitle = styled(Heading)`
  ${media.mobile`
    padding-bottom: 12px; 
  `};
`;

const Description = styled(Text)`
  ${media.mobile`
    font-size: 16px;
  `};
`;

const ContentWrapper = styled(Flex)`
  flex: 0 1 350px;

  ${media.mobile`
    flex: 1 1 auto;
    padding: 15px;
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

  ${media.mobile`
    flex-direction: column;
  `};
`;

const FlexImage = styled(Flex)`
  flex: 1 1 auto;
  border-radius: 5px 0 0 5px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  background-image: url(${p => p.src});

  ${media.mobile`
    border-radius: 0;
    min-height: 140px;
  `};
`;

export default Card;
