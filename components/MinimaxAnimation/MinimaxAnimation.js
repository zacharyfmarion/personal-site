import * as React from 'react';
import memoize from 'lodash.memoize';
import Tree from 'react-svg-tree';
import styled from 'styled-components';

import getArrowCoordinates from 'utils/getArrowCoordinates';
import TextLabel from 'components/TextLabel';
import PlayBar from 'components/PlayBar';
import Arrow from '../Arrow';

import minimax from './minimax';

// props: alphaBeta (Boolean)
// rewards: Map<string, number>
// vertexMap: Map<any, Array<any>>
// minStart: boolean (start with min instead of max)
// treeOptions: Object
class MinimaxAnimation extends React.Component {
  getStates = () => {
    const { rewards, vertexMap, rootNode, alphaBeta, minStart } = this.props;
    const states = [{ rewards, active: [], pruned: [], depth: 0, arrows: [] }];
    const depths = [rootNode];
    minimax({
      states,
      depths,
      rewards,
      minStart,
      alphaBeta,
      tree: vertexMap,
      parent: null,
      node: rootNode,
      alpha: -Infinity,
      beta: Infinity,
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
    const compareDepth = this.props.minStart ? 1 : 0;
    return depths.map((node, i) => (
      <LayerText x={0} y={graph.yCoord(node) + 2}>
        {i % 2 === compareDepth ? 'max' : 'min'}
      </LayerText>
    ));
  };

  render() {
    const { vertexMap, rootNode, treeOptions } = this.props;
    const { states, depths } = this.getStates();
    return (
      <StyledPlayBar states={states}>
        {({ rewards, active, arrows }) => (
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
            {...treeOptions}
          >
            {({ x, y, id, graph }) => (
              <g>
                {id === rootNode && this.renderArrows(graph, arrows)}
                {id === rootNode && this.renderLayerLabels(graph, depths)}
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
                  label={rewards.get(id) === undefined ? '?' : rewards.get(id)}
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

const LayerText = styled.text`
  font-size: 5px;
`;

export default MinimaxAnimation;
