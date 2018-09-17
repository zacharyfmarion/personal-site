import * as React from 'react';
import { Text, Heading, Flex } from 'rebass';
import styled from 'styled-components';

import EventIcon from '../assets/event.svg';

const Event = ({ title, subtitle, description, timeRange }) => {
  return (
    <EventWrapper>
      <Flex>
        <TimeRange justifyContent="flex-end">{timeRange}</TimeRange>
        <EventIconContainer justifyContent="center" alignItems="center">
          <StyledEventIcon />
        </EventIconContainer>
      </Flex>
      <EventContent flexDirection="column" p={3}>
        <Title is="h2" fontSize={4}>
          {title}
        </Title>
        <Subtitle is="h5" fontSize={2}>
          {subtitle}
        </Subtitle>
        <Description>{description}</Description>
      </EventContent>
    </EventWrapper>
  );
};

const Title = styled(Heading)`
  font-weight: 400;
`;

const Subtitle = styled(Heading)`
  font-weight: 400;
  color: #7e8890;
  margin-top: 5px;
`;

const Description = styled(Text)`
  margin-top: 15px;
`;

const EventWrapper = styled(Flex)`
  margin-bottom: 20px;
  font-family: 'Noto Sans', sans-serif;
`;

const EventContent = styled(Flex)`
  border-radius: 3px;
  margin-left: 20px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
`;

const EventIconContainer = styled(Flex)`
  position: relative;
  color: #fff;
  width: 50px;
  min-width: 50px;
  height: 50px;
  background: ${p => p.theme.colors.primary};
  border-radius: 50%;
  float: left;
  z-index: 99;
  margin-left: 20px;
`;

const StyledEventIcon = styled(EventIcon)`
  width: 30px;
  height: 30px;
  fill: #fff;
`;

const TimeRange = styled(Flex)`
  width: 260px;
  margin-top: 15px;
`;

export default Event;
