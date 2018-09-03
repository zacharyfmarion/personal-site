import * as React from 'react';
import Tree from 'react-svg-tree';
import TextLabel from '../TextLabel';
import PlayBar from '../PlayBar';

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

class TreeAnimation extends React.Component {
  state = {
    vertexMap: new Map([
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

  render() {
    return (
      <PlayBar states={this.states}>
        {visited => (
          <Tree
            width={200}
            height={75}
            rootId="O"
            nodeSize={5}
            vertices={this.state.vertexMap}
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
                <TextLabel x={x} y={y} label={id} />
              </g>
            )}
          </Tree>
        )}
      </PlayBar>
    );
  }
}

export default TreeAnimation;
