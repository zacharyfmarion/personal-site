import * as React from 'react';
import { Flex, Text, BackgroundImage, Heading } from 'rebass';
import styled, { css } from 'styled-components';

import Menu from 'components/Menu';
import media from 'utils/media';
import BackIcon from './assets/arrow-left.svg';

const Header = ({
  title,
  subtitle,
  image,
  hideTitleBackground,
  onBack,
  backText,
  ...props
}) => {
  const Wrapper = image ? ImageWrapper : FlexWrapper;
  return (
    <Wrapper px={4} py={5} ratio={3 / 4} src={image} color="white" {...props}>
      {onBack && (
        <BackContainer alignItems="center" onClick={onBack}>
          <StyledBackIcon />
          <Text>{backText || 'Back to posts'}</Text>
        </BackContainer>
      )}
      <Menu />
      <TitleContainer
        flexDirection="column"
        hideTitleBackground={hideTitleBackground}
      >
        <TitleHeading is="h1" textAlign="center">
          {title}
        </TitleHeading>
        <SubtitleHeading is="h6" textAlign="center" fontWeight={400}>
          {subtitle}
        </SubtitleHeading>
      </TitleContainer>
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

const TitleContainer = styled(Flex)`
  ${p =>
    !p.hideTitleBackground &&
    `
    background: rgba(100, 100, 100, 0.4);
    padding: 5px 17px;
    border-radius: 12px;
  `};
`;

const BackContainer = styled(Flex)`
  position: absolute;
  left: 15px;
  top: 15px;
  cursor: pointer;
  background: rgba(100, 100, 100, 0.4);
  padding: 5px 17px;
  border-radius: 12px;
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
  ${p => !p.src && `background-color: ${p.theme.colors.dark}`};
  height: 500px;

  ${media.mobile`
    height: 350px;
    padding-top: 0;
  `};
`;

const ImageWrapper = styled(BackgroundImage)`
  ${backgroundStyles};
`;

const FlexWrapper = styled(Flex)`
  ${backgroundStyles};
`;

export default Header;
