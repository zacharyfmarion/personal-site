import * as React from 'react';
import memoize from 'lodash.memoize';
import Tree from 'react-svg-tree';

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

class MinimaxAnimation extends React.Component {
  state = {
    rewards: new Map(),
  };

  getStates = () => {
    const rewards = new Map([
      ['F', 1],
      ['A', 5],
      ['G', 4],
      ['B', -1],
      ['C', 3],
      ['H', -4],
      ['I', 1],
      ['J', 2],
      ['K', -9],
      ['L', 9],
    ]);
    const states = [{ rewards, active: [], arrows: [] }];
    minimax({ tree: vertexMap, rewards, states, parent: null, node: 'O' });
    console.log(states);
    return states;
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
  renderLayerLabels = () => {};

  render() {
    return (
      <PlayBar states={this.getStates()}>
        {({ rewards, active, arrows }) => (
          <Tree
            width={200}
            height={75}
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
                <circle
                  cx={x}
                  cy={y}
                  r={5}
                  fill={active.includes(id) ? 'rgb(15, 98, 189)' : 'gray'}
                />
                <TextLabel
                  x={x}
                  y={y}
                  label={
                    !rewards || rewards.get(id) === undefined
                      ? '?'
                      : rewards.get(id)
                  }
                />
              </g>
            )}
          </Tree>
        )}
      </PlayBar>
    );
  }
}

export default MinimaxAnimation;
