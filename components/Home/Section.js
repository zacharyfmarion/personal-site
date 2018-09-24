import * as React from 'react';
import { Flex, Heading, Container } from 'rebass';
import styled from 'styled-components';
import media from 'utils/media';

const Section = ({ title, dark, primary, children, className }) => {
  return (
    <SectionWrapper
      className={className}
      dark={dark}
      primary={primary}
      flexDirection="column"
      p={4}
    >
      <SectionContainer>
        <SectionHeading is="h2" primary={primary}>
          {title}
        </SectionHeading>
        {children}
      </SectionContainer>
    </SectionWrapper>
  );
};

const SectionContainer = styled(Container)`
  width: 100%;
`;

const SectionHeading = styled(Heading)`
  position: relative;
  font-size: 2em;
  font-weight: 300;
  margin: 0 0 30px 0;
  text-align: center;
  color: ${p => (p.primary ? '#fff' : '#000')};

  &::after {
    position: absolute;
    content: '';
    top: 100%;
    height: 1px;
    width: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: ${p => p.theme.colors.primary};
  }
`;

const SectionWrapper = styled(Flex)`
  flex-direction: column;
  background: ${({ dark, primary, theme }) => {
    if (dark) return theme.colors.gray;
    if (primary) return theme.colors.primary;
    return '#fff';
  }};
  line-height: 1.5em;

  ${media.mobile`
    padding: 30px 15px; 
  `};
`;

export default Section;
