import * as React from 'react';
import memoize from 'lodash.memoize';
import Tree from 'react-svg-tree';

import getArrowCoordinates from 'utils/getArrowCoordinates';

import dfs from './dfs';
import Arrow from '../Arrow';
import PlayBar from '../PlayBar';
import TextLabel from '../TextLabel';

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

  getStates = () => {
    let states = [{ active: [], arrows: [] }];
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
                  cy={id === 'O' ? y + 1 : y}
                  r={5}
                  fill={active.includes(id) ? 'rgb(15, 98, 189)' : 'white'}
                  stroke="black"
                  stroke-width={0.5}
                />
                <TextLabel
                  x={x}
                  y={id === 'O' ? y + 1 : y}
                  label={id}
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

export default TreeAnimation;
