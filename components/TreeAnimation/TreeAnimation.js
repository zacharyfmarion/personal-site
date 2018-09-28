import * as React from 'react';
import memoize from 'lodash.memoize';
import styled from 'styled-components';
import Tree from 'react-svg-tree';

import getArrowCoordinates from 'utils/getArrowCoordinates';

import dfs from './dfs';
import Arrow from '../Arrow';
import PlayBar from '../PlayBar';
import TextLabel from '../TextLabel';

class TreeAnimation extends React.Component {
  getStates = () => {
    let states = [{ active: [], arrows: [] }];
    const { vertexMap, rootNode } = this.props;
    dfs({
      states,
      vertexMap,
      node: rootNode,
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
    const { vertexMap, rootNode, onError, treeOptions } = this.props;
    return (
      <StyledPlayBar states={this.getStates()}>
        {({ arrows, active }) => (
          <Tree
            width={200}
            height={85}
            rootId={rootNode}
            nodeSize={5}
            vertices={vertexMap}
            levelSeparation={20}
            maxDepth={Infinity}
            siblingSeparation={15}
            subtreeSeparation={15}
            onError={onError}
            {...treeOptions}
          >
            {({ x, y, id, graph }) => (
              <g>
                {id === rootNode && this.renderArrows(graph, arrows)}
                <circle
                  cx={x}
                  cy={id === rootNode ? y + 1 : y}
                  r={5}
                  fill={active.includes(id) ? 'rgb(15, 98, 189)' : 'white'}
                  stroke="black"
                  stroke-width={0.5}
                />
                <TextLabel
                  x={x}
                  y={id === rootNode ? y + 1 : y}
                  label={id}
                  color={active.includes(id) ? 'white' : 'black'}
                />
              </g>
            )}
          </Tree>
        )}
      </StyledPlayBar>
    );
  }
}

const StyledPlayBar = styled(PlayBar)`
  width: 100%;
`;

export default TreeAnimation;
