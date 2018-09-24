/**
 * Implementation of minimax, assuming the state tree has already
 * been constructed and max is the root
 */

const getPrevState = states => {
  const prevState = states[states.length - 1];
  const arrows = prevState ? prevState.arrows.slice() : [];
  const active = prevState ? prevState.active.slice() : [];
  const pruned = prevState ? prevState.pruned.slice() : [];
  const depth = prevState ? prevState.depth : 0;
  const rewards = prevState ? new Map(prevState.rewards) : new Map();
  return { arrows, depth, active, pruned, rewards };
};

const addState = (states, content) => {
  const prevState = getPrevState(states);
  states.push({ ...prevState, ...content });
};

/**
 * @param {Map<any, Array<any>>} tree The tree, represented as a vertex map
 * @param {Map<any, number>} rewards Map of each nodes to it's reward, only defined for
 *   terminal nodes
 * @param {any} node The root node of the tree
 * @return {Object} The best node and ???
 */
export default ({
  tree,
  rewards,
  node,
  parent,
  depths,
  states,
  alphaBeta,
  alpha,
  beta,
}) => {
  const children = tree.get(node);
  if (children) {
    const totalRewards = [];
    let max = -Infinity;
    let maxIndex = -1;
    let breakLoop = false;

    for (let childIndex = 0; childIndex < children.length; childIndex++) {
      const child = children[childIndex];
      const val = minPlay({
        tree,
        alpha,
        beta,
        depths,
        states,
        rewards,
        alphaBeta,
        node: child,
        parent: node,
      });
      // Add a state for the up arrows
      const { active, rewards: rewardMap, depth, arrows } = getPrevState(
        states,
      );
      arrows.push({ node1: child, node2: node, up: true });

      // Getting alpha value
      alpha = Math.max(alpha, val);
      breakLoop = alpha >= beta;

      if (val >= max) {
        max = val;
        maxIndex = childIndex;
        rewardMap.set(node, val);
      }
      if (childIndex === children.length - 1) {
        active.push(node);
        // TODO get the arrow associated with the best action and add
        // an active: true property to it
      }
      addState(states, {
        arrows,
        active,
        depth: depth - 1,
        rewards: rewardMap,
      });

      if (breakLoop && alphaBeta) break;
    }
    return children[maxIndex];
  }
  console.log('Could not find tree root');
};

function maxPlay({
  tree,
  rewards,
  parent,
  depths,
  node,
  states,
  alpha,
  beta,
  alphaBeta,
}) {
  const children = tree.get(node);
  const noChildren = !children || children.length === 0;

  // Add a state for the down arrows
  const { active, depth, arrows } = getPrevState(states);
  arrows.push({ node1: parent, node2: node, up: false });
  if (noChildren) active.push(node);
  addState(states, { arrows, active, depth: depth + 1 });

  // Add an entry to the depths array if we have not been at this depth
  if (depth + 1 > depths.length - 1) depths.push(node);
  if (noChildren) return rewards.get(node) || 0;

  let max = -Infinity;
  let breakLoop = false;

  for (let childIndex = 0; childIndex < children.length; childIndex++) {
    const child = children[childIndex];
    const val = minPlay({
      tree,
      alpha,
      beta,
      states,
      depths,
      rewards,
      alphaBeta,
      node: child,
      parent: node,
    });

    // Add a state for the up arrows
    const { active, rewards: rewardMap, depth, arrows } = getPrevState(states);
    arrows.push({ node1: child, node2: node, up: true });

    // Getting alpha value
    alpha = Math.max(alpha, val);
    breakLoop = alpha >= beta;

    if (val >= max) {
      max = val;
      rewardMap.set(node, val);
    }
    if (childIndex === children.length - 1 || breakLoop) {
      active.push(node);
    }
    addState(states, { arrows, active, depth: depth - 1, rewards: rewardMap });
    if (breakLoop && alphaBeta) break;
  }
  return max;
}

function minPlay({
  tree,
  rewards,
  parent,
  depths,
  node,
  states,
  alpha,
  beta,
  alphaBeta,
}) {
  const children = tree.get(node);
  const noChildren = !children || children.length === 0;

  // Add a state for the down arrows
  const { active, depth, arrows } = getPrevState(states);
  arrows.push({ node1: parent, node2: node, up: false });
  if (noChildren) active.push(node);
  addState(states, { arrows, active, depth: depth + 1 });

  // Add an entry to the depths array if we have not been at this depth
  if (depth + 1 > depths.length - 1) depths.push(node);
  if (noChildren) return rewards.get(node) || 0;

  let min = Infinity;
  let breakLoop = false;

  for (let childIndex = 0; childIndex < children.length; childIndex++) {
    const child = children[childIndex];
    const val = maxPlay({
      tree,
      alpha,
      beta,
      states,
      depths,
      rewards,
      alphaBeta,
      node: child,
      parent: node,
    });
    // Add a state for the up arrows
    const { active, rewards: rewardMap, depth, arrows } = getPrevState(states);
    arrows.push({ node1: child, node2: node, up: true });

    // Getting the beta value
    beta = Math.min(beta, val);
    breakLoop = alpha >= beta;

    if (alpha <= min) {
      min = val;
      rewardMap.set(node, val);
    }
    if (childIndex === children.length - 1 || breakLoop) {
      active.push(node);
    }
    addState(states, { arrows, active, depth: depth - 1, rewards: rewardMap });
    if (breakLoop && alphaBeta) break;
  }
  return min;
}
