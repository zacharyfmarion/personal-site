import * as React from 'react';
import Tree from 'react-svg-tree';
import TextLabel from '../TextLabel';
import PlayBar from '../PlayBar';
import Arrow from '../Arrow';
import dfs from './dfs';

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
    root: 'O',
  };

  get states() {
    return LETTERS.reduce(
      (acc, letter, index) => {
        return [...acc, LETTERS.slice(0, index + 1)];
      },
      [[]],
    );
  }

  getPositionPair = (graph, node1, node2, up) => {
    const x1 = graph.xCoord(node1) + (up ? 5 : -5);
    const y1 = graph.yCoord(node1);
    const x2 = graph.xCoord(node2) + (up ? 5 : -5);
    const y2 = graph.yCoord(node2);
    return { x1, y1, x2, y2 };
  };

  getStates = () => {
    let states = [];
    const { vertexMap, root } = this.state;
    dfs({
      states,
      vertexMap,
      node: root,
      parent: null,
      visited: new Map(),
      active: [],
      arrows: [],
    });
    console.log(states);
    return states;
  };

  renderArrows = (graph, arrows) => {
    return arrows.map(({ node1, node2, up }) => (
      <Arrow
        {...this.getPositionPair(graph, node1, node2, up)}
        color="lightgray"
      />
    ));
  };

  render() {
    return (
      <PlayBar states={this.getStates()}>
        {({ arrows, active }) => (
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
            {({ x, y, id, graph }) => (
              <g>
                {id === 'O' && this.renderArrows(graph, arrows)}
                <circle
                  cx={x}
                  cy={y}
                  r={5}
                  fill={active.includes(id) ? 'rgb(15, 98, 189)' : 'gray'}
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
