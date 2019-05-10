import React from 'react';

import { getCenter, sizeRectFamily } from './formulas';


const TextFamilyElement = () => {};

const FamilyElement = ({ viewBox }) => {

  const rectStyle = {
    fill: '#fac78c',
    strokeWidth: 3,
    stroke: '#fcae53',
  };

  const viewRectPosition = getCenter(viewBox, sizeRectFamily);

  return (
    <g>
      <rect
        // id={1}
        style={rectStyle}
        width={sizeRectFamily[2]} height={sizeRectFamily[3]}
        rx={5} ry={5}
        x={viewRectPosition[0]} y={viewRectPosition[1]}
      />
    </g>
  );
};

export default FamilyElement;
