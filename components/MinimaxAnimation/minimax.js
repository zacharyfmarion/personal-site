/**
 * Implementation of minimax, assuming the state tree has already
 * been constructed and max is the root
 */

const getPrevState = states => {
  const prevState = states[states.length - 1];
  const arrows = prevState ? prevState.arrows.slice() : [];
  const active = prevState ? prevState.active.slice() : [];
  const depth = prevState ? prevState.depth : 0;
  const rewardMap = prevState ? new Map(prevState.rewards) : new Map();
  return { arrows, depth, active, rewardMap };
};

/**
 * @param {Map<any, Array<any>>} tree The tree, represented as a vertex map
 * @param {Map<any, number>} rewards Map of each nodes to it's reward, only defined for
 *   terminal nodes
 * @param {any} node The root node of the tree
 * @return {Object} The best node and ???
 */
export default ({ tree, rewards, node, parent, depths, states }) => {
  const children = tree.get(node);
  if (children) {
    const totalRewards = [];
    let max = -Infinity;
    let maxIndex = -1;
    for (let childIndex = 0; childIndex < children.length; childIndex++) {
      const child = children[childIndex];
      const val = minPlay({
        tree,
        depths,
        states,
        rewards,
        node: child,
        parent: node,
      });
      // Add a state for the up arrows
      const { active, rewardMap, depth, arrows } = getPrevState(states);
      arrows.push({ node1: child, node2: node, up: true });
      if (val > max) {
        max = val;
        maxIndex = childIndex;
        rewardMap.set(node, val);
      }
      if (childIndex === children.length - 1) {
        active.push(node);
        // TODO get the arrow associated with the best action and add
        // an active: true property to it
      }
      states.push({ arrows, active, depth: depth - 1, rewards: rewardMap });
    }
    return children[maxIndex];
  }
  console.log('Could not find tree root');
};

function minPlay({ tree, rewards, parent, depths, node, states }) {
  const children = tree.get(node);
  const noChildren = !children || children.length === 0;

  // Add a state for the down arrows
  const { active, rewardMap, depth, arrows } = getPrevState(states);
  arrows.push({ node1: parent, node2: node, up: false });
  if (noChildren) active.push(node);
  states.push({ arrows, active, depth: depth + 1, rewards: rewardMap });

  // Add an entry to the depths array if we have not been at this depth
  if (depth + 1 > depths.length - 1) {
    depths.push(node);
  }

  if (noChildren) return rewards.get(node) || 0;

  let min = Infinity;
  for (let childIndex = 0; childIndex < children.length; childIndex++) {
    const child = children[childIndex];
    const val = maxPlay({
      tree,
      states,
      depths,
      rewards,
      node: child,
      parent: node,
    });
    // Add a state for the up arrows
    const { active, rewardMap, depth, arrows } = getPrevState(states);
    arrows.push({ node1: child, node2: node, up: true });
    if (val < min) {
      min = val;
      rewardMap.set(node, val);
    }
    if (childIndex === children.length - 1) {
      active.push(node);
    }
    states.push({ arrows, active, depth: depth - 1, rewards: rewardMap });
  }
  return min;
}

function maxPlay({ tree, rewards, parent, depths, node, states }) {
  const children = tree.get(node);
  const noChildren = !children || children.length === 0;

  // Add a state for the down arrows
  const { active, rewardMap, depth, arrows } = getPrevState(states);
  arrows.push({ node1: parent, node2: node, up: false });
  if (noChildren) active.push(node);
  states.push({ arrows, active, depth: depth + 1, rewards: rewardMap });

  // Add an entry to the depths array if we have not been at this depth
  if (depth + 1 > depths.length - 1) {
    depths.push(node);
  }

  if (noChildren) return rewards.get(node) || 0;

  let max = -Infinity;
  for (let childIndex = 0; childIndex < children.length; childIndex++) {
    const child = children[childIndex];
    const val = minPlay({
      tree,
      states,
      depths,
      rewards,
      node: child,
      parent: node,
    });

    // Add a state for the up arrows
    const { active, rewardMap, depth, arrows } = getPrevState(states);
    arrows.push({ node1: child, node2: node, up: true });
    if (val > max) {
      max = val;
      rewardMap.set(node, val);
    }
    if (childIndex === children.length - 1) {
      active.push(node);
    }
    states.push({ arrows, active, depth: depth - 1, rewards: rewardMap });
  }
  return max;
}
