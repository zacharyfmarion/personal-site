import * as React from 'react';
import styled from 'styled-components';

const Arrow = ({ x1, y1, x2, y2, className, color = 'black' }) => {
  return (
    <g>
      <defs>
        <marker
          id="head"
          orient="auto"
          markerWidth="2"
          markerHeight="4"
          refX="0.1"
          refY="2"
        >
          <path d="M0,0 V4 L2,2 Z" fill={color} />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        markerEnd="url(#head)"
        stroke={color}
        className={className}
      />
    </g>
  );
};

export default Arrow;
