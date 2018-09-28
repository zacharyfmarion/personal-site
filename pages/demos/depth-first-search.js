import * as React from 'react';
import { Flex, Text, Heading, Container } from 'rebass';
import styled from 'styled-components';

import TreeAnimation from 'components/TreeAnimation';
import Page from 'components/Page';
import Button from 'components/Button';
import media from 'utils/media';
import getRandomTree from 'utils/getRandomTree';

export const meta = {
  author: 'Zachary Marion',
  title: 'Depth First Search',
  date: '09-21-2018',
  description:
    'Explore the Depth First Search (DFS) algorithm using randomly generated svg trees',
  image:
    'https://images.unsplash.com/photo-1465487862947-ded619a2a9ab?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=68130b7d4392394e1876bbd54c82f427',
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
