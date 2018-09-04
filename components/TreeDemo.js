import * as React from 'react';
import Tree from 'react-svg-tree';
import Button from './Button';

// Component to create a tree, used in docz as a demo of the component
class TreeDemo extends React.Component {
  state = {
    vertexMap: new Map([
      [0, [1, 2, 3]],
      [1, [4, 5]],
      [2, []],
      [3, [6]],
      [4, []],
      [5, []],
      [6, []],
    ]),
    maxNodeId: 6,
    error: null,
  };

  handleError = error => {
    this.setState({ error });
  };

  resetState = () => {
    this.setState({
      vertexMap: new Map([
        [0, [1, 2, 3]],
        [1, [4, 5]],
        [2, []],
        [3, [6]],
        [4, []],
        [5, []],
        [6, []],
      ]),
      maxNodeId: 6,
      error: null,
    });
  };

  addNode = node => {
    let { vertexMap, maxNodeId } = this.state;
    const children = vertexMap.get(node) || [];
    maxNodeId += 1;
    children.push(maxNodeId);
    vertexMap.set(node, children);
    vertexMap.set(maxNodeId, []);
    this.setState({ vertexMap, maxNodeId });
  };

  renderNode = ({ x, y, id }) => (
    <g onClick={() => this.addNode(id)} style={{ cursor: 'pointer' }}>
      <circle cx={x} cy={y} r={5} fill="rgb(15, 98, 189)" />
      <text
        x={x}
        y={(y || 0) + 1.5}
        style={{ fontSize: 5 }}
        textAnchor="middle"
        fill="#fff"
      >
        +
      </text>
    </g>
  );

  render() {
    return (
      <div>
        <Button onClick={this.resetState}>Reset Tree</Button>
        {!this.state.error ? (
          <Tree
            width={200}
            height={100}
            nodeSize={5}
            levelSeparation={20}
            siblingSeparation={15}
            subtreeSeparation={15}
            maxDepth={Infinity}
            vertices={this.state.vertexMap}
            onError={this.handleError}
          >
            {this.renderNode}
          </Tree>
        ) : (
          this.state.error && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 200,
              }}
            >
              {this.state.error}
            </div>
          )
        )}
      </div>
    );
  }
}

export default TreeDemo;
