import * as React from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import EmailForm from 'components/EmailForm';

const Contact = () => {
  return (
    <StyledLayout title="Contact Me">
      <StyledEmailForm hideTitle />
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  .layout__post-container {
    max-width: 1024px !important;
  }
`;

const StyledEmailForm = styled(EmailForm)`
  border-radius: 4px;
`;

export default Contact;
