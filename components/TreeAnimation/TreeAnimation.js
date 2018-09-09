import * as React from 'react';
import memoize from 'lodash.memoize';

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

  getArrowCoordinates = (graph, node1, node2, up) => {
    let x1 = graph.xCoord(node1);
    let y1 = graph.yCoord(node1);
    let x2 = graph.xCoord(node2);
    let y2 = graph.yCoord(node2);
    // we find the angle of the line
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const theta = Math.abs(Math.atan(deltaY / deltaX));
    // first we shift the entire line up or down so that it
    // is visible and not on top of the tree edge line
    const lineShiftAmount = 2;
    const xDirection = up ? 1 : -1;
    const yDirection = Math.sign(deltaX);
    let xShift =
      lineShiftAmount * Math.abs(Math.cos(Math.PI / 2 - theta)) * xDirection;
    let yShift =
      lineShiftAmount * Math.abs(Math.sin(Math.PI / 2 - theta)) * yDirection;
    x1 += xShift;
    y1 += yShift;
    x2 += xShift;
    y2 += yShift;
    // we now find the x and y shifts
    const endShiftAmount = 7;
    xShift = Math.abs(endShiftAmount * Math.cos(theta));
    yShift = Math.abs(endShiftAmount * Math.sin(theta));
    // Compute the new coordinates taking these shift values
    // into account
    x1 += xShift * Math.sign(deltaX);
    y1 += yShift * Math.sign(deltaY);
    x2 -= xShift * Math.sign(deltaX);
    y2 -= yShift * Math.sign(deltaY);
    return { x1, y1, x2, y2 };
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
    console.log(states);
    return states;
  };

  renderArrows = memoize((graph, arrows) => {
    return arrows.map(({ node1, node2, up }) => (
      <Arrow
        {...this.getArrowCoordinates(graph, node1, node2, up)}
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
