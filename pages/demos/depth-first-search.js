import * as React from 'react';
import { Flex, Text, Heading, Container } from 'rebass';
import styled from 'styled-components';

import TreeAnimation from '@/components/TreeAnimation';
import Page from '@/components/Page';
import Button from '@/components/Button';
import media from '@/utils/media';
import getRandomTree from '@/utils/getRandomTree';

export const meta = {
  author: 'Zachary Marion',
  title: 'Depth First Search',
  date: '09-21-2018',
  description:
    'Explore the Depth First Search (DFS) algorithm using randomly generated svg trees',
  image:
    'https://images.unsplash.com/photo-1538102894545-170c37b51c3d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8118f51819521b487bd264308d18667&auto=format&fit=crop&w=1950&q=80',
  link: '/demos/depth-first-search',
};

class DepthFirstSearch extends React.Component {
  state = {
    tree: null,
  };

  componentDidMount() {
    this.getTree();
  }

  getTree = () => {
    const { tree } = getRandomTree({
      tree: new Map(),
      rewards: new Map(),
      node: 0,
    });
    this.setState({ tree });
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
          <TreeAnimation
            rootNode={0}
            vertexMap={tree}
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

export default DepthFirstSearch;
