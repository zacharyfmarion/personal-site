import * as React from 'react';
import { Flex, Text, Heading, Container } from 'rebass';
import styled from 'styled-components';

import getRandomInt from 'utils/getRandomInt';
import { Menu } from 'components/Home';
import Footer from 'components/Footer';
import Button from 'components/Button';
import Link from 'components/Link';
import MinimaxAnimation from 'components/MinimaxAnimation';

export const meta = {
  author: 'Zachary Marion',
  title: 'Alpha Beta Pruning',
  date: '09-23-2018',
  description: 'This is a test',
  image:
    'https://images.unsplash.com/photo-1465487862947-ded619a2a9ab?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=68130b7d4392394e1876bbd54c82f427',
  link: '/demos/alpha-beta',
};

class Demos extends React.Component {
  state = {
    tree: null,
    rewards: null,
  };

  componentDidMount() {
    this.getTree();
  }

  /**
   * Generate a random tree and perform minimax. We recursively
   * create child nodes by randomly picking a number between 0
   * and 3, forcibly stopping after a depth of 3. Note that we assume
   * that the root node is 0 and we assign integer ids to each node that
   * are incremented from 0 in the order that they are traversed
   */
  generateTree = ({ tree, rewards, node, highestIndex = 0, depth = 0 }) => {
    // generate a random number of children
    const numChildren = getRandomInt(depth === 0 ? 1 : 0, 3);
    tree.set(node, []);
    // base case if there are no children or it depth has been exceeded
    if (depth >= 3 || numChildren === 0) return { tree, rewards, highestIndex };
    // for each child, call generateTree
    let childIndexStart = node;
    for (let i = 0; i < numChildren; i++) {
      // node + i is the index of the node we are creating
      const childIndex = childIndexStart + i + 1;
      tree.get(node).push(childIndex);
      const res = this.generateTree({
        tree,
        rewards,
        node: childIndex,
        highestIndex: childIndex,
        depth: depth + 1,
      });
      // We set the start of our child index to the highest index returned
      // from our recursive call
      childIndexStart = res.highestIndex;
      // tree is passed by reference and so should be updated now with
      // all the child values. We check if the child node has any children.
      // If it does not, we assign a randomized reward to the node
      if (tree.get(childIndex).length === 0) {
        // console.log(tree, childIndex, tree.get(childIndex));
        const reward = getRandomInt(-10, 10);
        rewards.set(childIndex, reward);
      }
    }
    return { tree, rewards, highestIndex: childIndexStart };
  };

  getTree = () => {
    const { tree, rewards } = this.generateTree({
      tree: new Map(),
      rewards: new Map(),
      node: 0,
    });
    this.setState({ tree, rewards });
  };

  render() {
    const { tree, rewards } = this.state;
    return (
      <DemoWrapper flexDirection="column">
        <Menu />
        <SubMenu>
          <SubMenuContainer p={3}>
            <span>
              <Link href="/demos" color="black">
                Demos
              </Link>{' '}
              <LinkDivider>/</LinkDivider>
              <Link href={meta.link} color="black">
                {meta.title}
              </Link>
            </span>
          </SubMenuContainer>
        </SubMenu>
        <Content>
          <GenerateButton onClick={this.getTree}>
            Generate random tree
          </GenerateButton>
          {tree && (
            <MinimaxAnimation
              alphaBeta
              rootNode={0}
              vertexMap={tree}
              rewards={rewards}
              treeOptions={{
                width: 250,
                height: 85,
              }}
            />
          )}
        </Content>
        <Footer author="Zachary Marion" dark />
      </DemoWrapper>
    );
  }
}

const LinkDivider = styled.span`
  padding: 0 8px;
`;

const SubMenu = styled(Flex)`
  background: #f4f8fb;
  margin-bottom: 20px;
`;

const SubMenuContainer = styled(Container)`
  text-align: left;
  width: 100%;
`;

const PageDescription = styled(Text)`
  width: 100%;
`;

const PageTitle = styled(Heading)`
  width: 100%;
`;

const GenerateButton = styled(Button)`
  max-width: 300px;
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  flex: 1 1 auto;
  width: 100%;
`;

const DemoWrapper = styled(Flex)`
  padding-top: 60px;
  min-height: 100vh;
`;

export default Demos;
