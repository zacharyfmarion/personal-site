import * as React from 'react';
import { Flex, Heading, Container } from 'rebass';
import styled from 'styled-components';

const Section = ({ title, dark, children, className }) => {
  return (
    <SectionWrapper
      className={className}
      dark={dark}
      flexDirection="column"
      p={4}
    >
      <SectionContainer>
        <SectionHeading>{title}</SectionHeading>
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

  &::after {
    position: absolute;
    content: '';
    top: 100%;
    height: 1px;
    width: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: #3498db;
  }
`;

const SectionWrapper = styled(Flex)`
  flex-direction: column;
  background: ${p => (p.dark ? '#f2f2f5' : '#fff')};
  line-height: 1.5em;
`;

export default Section;
