/**
 * Shorten and offset an arrow from the edge of a graph vertex in order to
 * display an arrow representing the direction of the traversal
 */
export default (graph, node1, node2, up) => {
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
