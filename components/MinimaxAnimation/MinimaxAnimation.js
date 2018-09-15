import * as React from 'react';
import memoize from 'lodash.memoize';
import Tree from 'react-svg-tree';
import styled from 'styled-components';

import getArrowCoordinates from 'utils/getArrowCoordinates';
import TextLabel from 'components/TextLabel';
import PlayBar from 'components/PlayBar';
import Arrow from '../Arrow';

import minimax from './minimax';

const vertexMap = new Map([
  ['O', ['E', 'F', 'N']],
  ['E', ['A', 'D']],
  ['F', []],
  ['N', ['G', 'M']],
  ['A', []],
  ['D', ['B', 'C']],
  ['G', []],
  ['M', ['H', 'I', 'J', 'K', 'L']],
  ['B', []],
  ['C', []],
  ['H', []],
  ['I', []],
  ['J', []],
  ['K', []],
  ['L', []],
]);

// props: alphaBeta (Boolean)
class MinimaxAnimation extends React.Component {
  getStates = () => {
    const rewards = new Map([
      ['F', 1],
      ['A', 5],
      ['G', 4],
      ['B', -1],
      ['C', 3],
      ['H', -4],
      ['I', 9],
      ['J', 2],
      ['K', -9],
      ['L', 1],
    ]);
    const states = [{ rewards, active: [], depth: 0, arrows: [] }];
    const depths = ['O'];
    minimax({
      rewards,
      states,
      depths,
      tree: vertexMap,
      parent: null,
      node: 'O',
    });
    return { states, depths };
  };

  renderArrows = memoize((graph, arrows) => {
    return arrows.map(({ node1, node2, up }) => (
      <Arrow
        {...getArrowCoordinates(graph, node1, node2, up)}
        color="lightgray"
      />
    ));
  });

  // render either min or max at each level to indicate
  // the operation that is taking place
  renderLayerLabels = (graph, depths) => {
    return depths.map((node, i) => (
      <LayerText x={5} y={graph.yCoord(node) + 2}>
        {i % 2 === 0 ? 'MAX' : 'MIN'}
      </LayerText>
    ));
  };

  render() {
    const { states, depths } = this.getStates();
    return (
      <PlayBar states={states}>
        {({ rewards, active, arrows }) => (
          <Tree
            width={200}
            height={85}
            rootId="O"
            nodeSize={5}
            vertices={vertexMap}
            levelSeparation={20}
            maxDepth={Infinity}
            siblingSeparation={15}
            subtreeSeparation={15}
          >
            {({ x, y, id, graph }) => (
              <g>
                {id === 'O' && this.renderArrows(graph, arrows)}
                {id === 'O' && this.renderLayerLabels(graph, depths)}
                <circle
                  cx={x}
                  cy={id === 'O' ? y + 1 : y}
                  r={5}
                  fill={active.includes(id) ? 'rgb(15, 98, 189)' : 'white'}
                  stroke="black"
                  stroke-width={0.5}
                />
                <TextLabel
                  x={x}
                  y={id === 'O' ? y + 1 : y}
                  label={rewards.get(id) === undefined ? '?' : rewards.get(id)}
                  color={active.includes(id) ? 'white' : 'black'}
                />
              </g>
            )}
          </Tree>
        )}
      </PlayBar>
    );
  }
}

const LayerText = styled.text`
  font-size: 5px;
  font-family: monospace;
`;

export default MinimaxAnimation;
