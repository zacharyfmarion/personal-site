import * as React from 'react';
import Tree from 'react-svg-tree';

import TextLabel from 'components/TextLabel';
import PlayBar from 'components/PlayBar';
import minimax from 'utils/minimax';

const LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
];

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
    rewards: new Map([
      ['F', 1],
      ['A', 5],
      ['G', 3],
      ['B', -1],
      ['C', 3],
      ['H', -4],
      ['I', 1],
      ['J', 2],
      ['K', -9],
      ['L', 9],
    ]),
  };

  get states() {
    return LETTERS.reduce(
      (acc, letter, index) => {
        return [...acc, LETTERS.slice(0, index + 1)];
      },
      [[]],
    );
  }

  componentDidMount() {
    this.runMinimax();
  }

  runMinimax = () => {
    const res = minimax(vertexMap, this.state.rewards, 'O');
    console.log(res);
  };

  render() {
    return (
      <PlayBar states={this.states}>
        {visited => (
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
            {({ x, y, id }) => (
              <g>
                <circle
                  cx={x}
                  cy={y}
                  r={5}
                  fill={visited.includes(id) ? 'rgb(15, 98, 189)' : 'gray'}
                />
                <TextLabel
                  x={x}
                  y={y}
                  label={
                    this.state.rewards.get(id) === undefined
                      ? '?'
                      : this.state.rewards.get(id)
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
