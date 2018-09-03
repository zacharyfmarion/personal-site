/**
 * Implementation of minimax, assuming the state tree has already
 * been constructed and max is the root
 */

/**
 * @param {Map<any, Array<any>>} tree The tree, represented as a vertex map
 * @param {Map<any, number>} rewards Map of each nodes to it's reward, only defined for
 *   terminal nodes
 * @param {any} root The root node of the tree
 * @param {0 | 1} player The player
 * @return {Object} The best node and ???
 */
export default (tree, rewards, root, player = 0) => {
  const children = tree.get(root);
  if (children) {
    const rewards = children.map(child =>
      minPlay(tree, rewards, child, 1 - player),
    );
    const bestActionIndex = rewards.indexOf(Math.max.apply(null, rewards));
    return children[bestActionIndex];
  }
  console.log('Could not find tree root');
};

function minPlay(tree, rewards, node, player) {
  const children = tree.get(node);
  if (!children) return (rewards.get(node) || 0) * -player;
  return Math.min.apply(
    null,
    children.map(child => maxPlay(tree, rewards, child, 1 - player)),
  );
}

function maxPlay(tree, rewards, node, player) {
  const children = tree.get(node);
  if (!children) return rewards.get(node) || 0;
  return Math.max.apply(
    null,
    children.map(child => minPlay(tree, rewards, child, 1 - player)),
  );
}
