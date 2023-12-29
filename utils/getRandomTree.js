import getRandomInt from '@/utils/getRandomInt';

/**
 * Generate a random tree and perform minimax. We recursively
 * create child nodes by randomly picking a number between 0
 * and 3, forcibly stopping after a depth of 3. Note that we assume
 * that the root node is 0 and we assign integer ids to each node that
 * are incremented from 0 in the order that they are traversed
 */

const getRandomTree = ({
  tree,
  rewards,
  node,
  highestIndex = 0,
  depth = 0,
}) => {
  // generate a random number of children
  const numChildren = getRandomInt(depth === 0 ? 1 : 0, 3);
  tree.set(node, []);
  // base case if there are no children or it depth has been exceeded
  if (depth >= 3 || numChildren === 0) return { tree, rewards, highestIndex };
  // for each child, call generateTree
  let childIndexStart = node;
  for (let i = 0; i < numChildren; i++) {
    // node + i is the index of the node we are creating
    const childIndex = childIndexStart + i + 1;
    tree.get(node).push(childIndex);
    const res = getRandomTree({
      tree,
      rewards,
      node: childIndex,
      highestIndex: childIndex,
      depth: depth + 1,
    });
    // We set the start of our child index to the highest index returned
    // from our recursive call
    childIndexStart = res.highestIndex;
    // tree is passed by reference and so should be updated now with
    // all the child values. We check if the child node has any children.
    // If it does not, we assign a randomized reward to the node
    if (tree.get(childIndex).length === 0) {
      // console.log(tree, childIndex, tree.get(childIndex));
      const reward = getRandomInt(-10, 10);
      rewards.set(childIndex, reward);
    }
  }
  return { tree, rewards, highestIndex: childIndexStart };
};

export default getRandomTree;
