import React from 'react';
import Router from 'next/router';
import { Provider as RebassProvider } from 'rebass';
import withGA from 'next-ga';

import StyledComponentsRegistry from '@/lib/registry'
import theme from '@/constants/theme';

const App = ({ Component, pageProps }) => (
  <StyledComponentsRegistry>
    <RebassProvider theme={theme}>
      <Component {...pageProps} />
    </RebassProvider>
  </StyledComponentsRegistry>
);

export default withGA('UA-126250037-1', Router)(App);
