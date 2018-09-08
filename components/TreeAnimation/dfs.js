/**
 * Run an in-order dfs on a tree of nodes
 */

const getFirstUnvisitedChild = (vertexMap, node, visited) => {
  for (let child of vertexMap.get(node) || []) {
    if (!visited.get(child)) return child;
  }
  return null;
};

const getPrevState = states => {
  const prevState = states[states.length - 1];
  const arrows = prevState ? prevState.arrows.slice() : [];
  const active = prevState ? prevState.active.slice() : [];
  return { arrows, active };
};

/**
 * Run a dfs to construct the list of nodes that were visited
 * because we are doing an inorder traversal we use a slightly
 * non-standard algorithm.
 *
 * Modifies the states array (Array<[any, any, boolean]>), where
 * the first two elements are the nodes in the connection and the
 * third boolean param determines whether the connect is going up
 */
const dfs = ({ vertexMap, node, parent, states, visited }) => {
  if (node === null) return;
  visited.set(node, true);

  // Get children of the current node
  const children = vertexMap.get(node) || [];

  for (let childIndex = 0; childIndex < children.length; childIndex++) {
    const child = children[childIndex];
    // construct the new states arrows and active nodes
    let { arrows, active } = getPrevState(states);
    arrows.push({ node1: node, node2: child, up: false });
    // check whether the child has any unvisited children. If not
    // we add it to active
    if (getFirstUnvisitedChild(vertexMap, child, visited) === null) {
      active.push(child);
    }
    states.push({ arrows, active });
    // run the dfs on the child
    dfs({
      vertexMap,
      node: child,
      parent: node,
      states,
      visited,
    });
    // add the up arrow from complete subtree to parent
    const prevState = getPrevState(states);
    arrows = prevState.arrows;
    active = prevState.active;
    arrows.push({ node1: child, node2: node, up: true });
    // if we are the last child then we also set the parent node
    // as active
    if (childIndex === children.length - 1) {
      active.push(node);
    }
    states.push({ arrows, active });
  }
};

export default dfs;
