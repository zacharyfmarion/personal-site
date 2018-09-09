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

  getLineShiftDirection = (deltaX, deltaY, up) => {
    let xDirection, yDirection;
    if (deltaX < 0 && deltaY > 0) {
      xDirection = -1;
      yDirection = -1;
    } else if (deltaX > 0 && deltaY > 0) {
      xDirection = -1;
      yDirection = 1;
    } else if (deltaX < 0 && deltaY < 0) {
      xDirection = 1;
      yDirection = 1;
    } else {
      xDirection = 1;
      yDirection = -1;
    }
    return { xDirection, yDirection };
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
    // these variables decide whether the x and y coords are moved up or
    // down for the line shift
    const { xDirection, yDirection } = this.getLineShiftDirection(
      deltaX,
      deltaY,
      up,
    );
    // first we shift the entire line up or down so that it
    // is visible and not on top of the tree edge line
    const lineShiftAmount = 5;
    let xShift = lineShiftAmount * Math.abs(Math.cos(Math.PI / 2 - theta));
    let yShift = lineShiftAmount * Math.abs(Math.sin(Math.PI / 2 - theta));
    x1 += xShift * xDirection;
    y1 += yShift * yDirection;
    x2 += xShift * xDirection;
    y2 += yShift * yDirection;
    // we now find the x and y shifts
    // const endShiftAmount = 3;
    // xShift = Math.abs(endShiftAmount * Math.cos(theta));
    // yShift = Math.abs(endShiftAmount * Math.sin(theta));
    // // Compute the new coordinates taking these shift values
    // // into account
    // x1 += xShift * Math.sign(deltaX);
    // y1 += yShift * Math.sign(deltaY);
    // x2 -= xShift * Math.sign(deltaX);
    // y2 -= yShift * Math.sign(deltaY);
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

  renderArrows = (graph, arrows) => {
    return arrows.map(({ node1, node2, up }) => (
      <Arrow
        {...this.getArrowCoordinates(graph, node1, node2, up)}
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
