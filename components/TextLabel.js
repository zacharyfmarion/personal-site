import * as React from 'react';

export default ({ x, y, label }) => (
  <text
    x={x}
    y={(y || 0) + 1.5}
    style={{ fontSize: 5 }}
    textAnchor="middle"
    fill="#fff"
  >
    {label}
  </text>
);
