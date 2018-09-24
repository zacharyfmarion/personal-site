import * as React from 'react';
import Layout from 'components/Layout';

import { meta as alphaBetaMeta } from './alpha-beta';

const demos = [alphaBetaMeta];

const Demos = () => {
  return (
    <Layout
      title="Demos"
      subtitle="Snippets & interactive demonstrations"
      posts={demos}
    />
  );
};

export default Demos;
