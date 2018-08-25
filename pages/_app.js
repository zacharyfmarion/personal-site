import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import { Provider as RebassProvider } from 'rebass';

import theme from 'constants/theme';
import components from '../components/markdown';

export default ({ Component, pageProps }) => (
  <MDXProvider components={components}>
    <RebassProvider theme={theme}>
      <Component {...pageProps} />
    </RebassProvider>
  </MDXProvider>
);
