export default (col, amt) => {
  col = parseInt(col.substring(1), 16);
  return (
    '#' +
    (
      ((col & 0x0000ff) + amt) |
      ((((col >> 8) & 0x00ff) + amt) << 8) |
      (((col >> 16) + amt) << 16)
    ).toString(16)
  );
};
