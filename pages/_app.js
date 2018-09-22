import React from 'react';
import Router from 'next/router';
import { MDXProvider } from '@mdx-js/tag';
import { Provider as RebassProvider } from 'rebass';
import withGA from 'next-ga';

import theme from 'constants/theme';
import components from '../components/markdown';

const App = ({ Component, pageProps }) => (
  <MDXProvider components={components}>
    <RebassProvider theme={theme}>
      <Component {...pageProps} />
    </RebassProvider>
  </MDXProvider>
);

export default withGA('UA-126250037-1', Router)(App);
