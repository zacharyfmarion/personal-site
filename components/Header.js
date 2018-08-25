import * as React from 'react';
import { Flex, Text, BackgroundImage, Heading } from 'rebass';
import styled, { css } from 'styled-components';
import media from 'utils/media';

import BackIcon from '../assets/arrow-left.svg';

const Header = ({ title, subtitle, image, onBack, ...props }) => {
  const Wrapper = image ? ImageWrapper : FlexWrapper;
  return (
    <Wrapper px={4} py={5} ratio={3 / 4} src={image} color="white" {...props}>
      {onBack && (
        <BackContainer alignItems="center" onClick={onBack}>
          <StyledBackIcon />
          <Text>Back to posts</Text>
        </BackContainer>
      )}
      <TitleHeading is="h1" textAlign="center">
        {title}
      </TitleHeading>
      <SubtitleHeading is="h6" textAlign="center" fontWeight={400}>
        {subtitle}
      </SubtitleHeading>
    </Wrapper>
  );
};

const TitleHeading = styled(Heading)`
  font-size: 3em;
  ${media.tablet`
    font-size: 2.5em; 
  `};
  ${media.mobile`
    font-size: 2em; 
  `};
`;

const SubtitleHeading = styled(Heading)`
  font-size: 2em;
  ${media.tablet`
    font-size: 1.5em; 
  `};
  ${media.mobile`
    font-size: 1.2em; 
  `};
`;

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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${p => !p.src && `background-color: #0e1b25`};
  height: 500px;
`;

const ImageWrapper = styled(BackgroundImage)`
  ${backgroundStyles};
`;

const FlexWrapper = styled(Flex)`
  ${backgroundStyles};
`;

export default Header;
