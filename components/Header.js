import * as React from 'react';
import { Flex, Text, BackgroundImage, Heading } from 'rebass';
import styled, { css } from 'styled-components';
import BackIcon from '../assets/arrow-left.svg';

const Header = ({ title, subtitle, image, isPost, onBack, ...props }) => {
  const Wrapper = image ? ImageWrapper : FlexWrapper;
  return (
    <Wrapper
      px={4}
      py={5}
      color="white"
      ratio={3 / 4}
      src={image}
      isPost={isPost}
      {...props}
    >
      {onBack && (
        <BackContainer alignItems="center" onClick={onBack}>
          <StyledBackIcon />
          <Text>Back to posts</Text>
        </BackContainer>
      )}
      <Heading is="h1" textAlign="center" fontSize={[4, 5, 6]}>
        {title}
      </Heading>
      <Heading is="h6" textAlign="center" fontWeight={400} fontSize={28}>
        {subtitle}
      </Heading>
    </Wrapper>
  );
};

const BackContainer = styled(Flex)`
  position: absolute;
  left: 15px;
  top: 15px;
  cursor: pointer;
`;

const StyledBackIcon = styled(BackIcon)`
  margin-right: 10px;
`;

const backgroundStyles = css`
  position: relative;
  height: ${p => (p.isPost ? 500 : 400)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageWrapper = styled(BackgroundImage)`
  ${backgroundStyles};
`;

const FlexWrapper = styled(Flex)`
  ${backgroundStyles};
`;

export default Header;
