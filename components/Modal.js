import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Flex, Text, Container, Heading } from 'rebass';

import Button from 'components/Button';
import Close from './assets/close.svg';
import media from 'utils/media';

// TODO: Use React Portal here
const Modal = ({
  onClose,
  title,
  description,
  footerContent,
  image,
  children,
}) => {
  const modalContent = (
    <ModalWrapper flexDirection="column">
      <ModalOverlay onClick={onClose} />
      <ModalContainer>
        <ModalHeader>
          <ModalHeading fontSize={20} is="h3">
            {title}
          </ModalHeading>
          <CloseIcon onClick={onClose}>Close</CloseIcon>
        </ModalHeader>
        <ModalBody>
          <FlexImage src={image} />
          <DescriptionText>{description}</DescriptionText>
        </ModalBody>
        <ModalFooter justifyContent="flex-end" alignItems="center">
          {footerContent}
        </ModalFooter>
      </ModalContainer>
    </ModalWrapper>
  );
  return ReactDOM.createPortal(modalContent, document.getElementById('root'));
};

const ModalFooter = styled(Flex)`
  border-top: 1px solid #ddd;
  height: 50px;
  padding: 0 20px;
`;

const DescriptionText = styled(Text)`
  padding: 20px;
  line-height: 1.5em;
`;

const FlexImage = styled(Flex)`
  flex: 1 1 auto;
  min-height: 280px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  background-image: url(${p => p.src});
  border-bottom: 1px solid #ddd;

  ${media.mobile`
    min-height: 180px;
  `};
`;

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(107, 107, 107, 0.5);

  ${media.tablet`
    display: none; 
  `};
`;

const CloseIcon = styled(Close)`
  cursor: pointer;
  fill: #fff;
`;

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 0;
  overflow: hidden;
  z-index: 3;
  width: 780px;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);

  ${media.tablet`
    width: 100%;
    height: 100%;
    border-radius: 0;
  `};
`;

const ModalHeading = styled(Heading)`
  display: flex;
  flex: 1 1 auto;
  margin-right: 15px;
`;

const ModalBody = styled.div`
  ${media.tablet`
    flex: 1 1 auto;
  `};
`;

const ModalHeader = styled(Flex)`
  height: 50px;
  background: ${p => p.theme.colors.dark};
  align-items: center;
  padding: 0 20px;
  color: #fff;
`;

const ModalWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export default Modal;
