import * as React from 'react';
import { Flex, Text, Heading, Container } from 'rebass';
import styled from 'styled-components';

import MinimaxAnimation from '@/components/MinimaxAnimation';
import Page from '@/components/Page';
import Button from '@/components/Button';
import media from '@/utils/media';
import getRandomTree from '@/utils/getRandomTree';

export const meta = {
  author: 'Zachary Marion',
  title: 'Alpha Beta Pruning',
  date: '09-23-2018',
  description:
    'Explore the Alpha-Beta Pruning algorithm using randomly generated svg trees',
  image:
    'https://images.unsplash.com/photo-1537998028529-0bb55c8a5b8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e98f803a6a3a9dbb1ae77c73e107749&auto=format&fit=crop&w=1950&q=80',
  link: '/demos/alpha-beta',
};

class AlphaBeta extends React.Component {
  state = {
    tree: null,
    rewards: null,
  };

  componentDidMount() {
    this.getTree();
  }

  getTree = () => {
    const { tree, rewards } = getRandomTree({
      tree: new Map(),
      rewards: new Map(),
      node: 0,
    });
    this.setState({ tree, rewards });
  };

  handleError = () => {
    // If the component throws an error because the random
    // tree generated was too large to fit in the viewbox we
    // simply regenerate another random tree until one works
    this.getTree();
  };

  render() {
    const { tree, rewards } = this.state;
    return (
      <Page baseLink="/demos" {...meta}>
        <GenerateButton onClick={this.getTree}>
          Generate random tree
        </GenerateButton>
        {tree && (
          <MinimaxAnimation
            alphaBeta
            rootNode={0}
            vertexMap={tree}
            rewards={rewards}
            onError={this.handleError}
            treeOptions={{
              width: 250,
              height: 85,
            }}
          />
        )}
      </Page>
    );
  }
}

const GenerateButton = styled(Button)`
  max-width: 300px;

  ${media.mobile`
    margin-bottom: 15px; 
    width: 100%;
    max-width: inherit;
  `};
`;

export default AlphaBeta;
