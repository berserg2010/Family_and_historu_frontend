import React from 'react';

import { sizeRectFamily, getPositionFamilyCenter } from './formulas';


const TextFamilyElement = ({ data, position }) => {

  const datetime = data.datetime
    ? JSON.parse(data.datetime)
    : {};

  return (
    <text
      x={position.x} y={position.y}
      textAnchor="middle"
    >
      <tspan x={position.x} y={position.y}>
        {datetime.day}.{datetime.month}.{datetime.year}
      </tspan>
    </text>
  )
};

const FamilyElement = ({ position, marriage }) => {

  const rectStyle = {
    fill: '#fac78c',
    strokeWidth: 3,
    stroke: '#fcae53',
  };

  return (
    <g>
      <rect
        style={rectStyle}
        width={sizeRectFamily.width} height={sizeRectFamily.height}
        rx={5} ry={5}
        x={getPositionFamilyCenter(position).x} y={getPositionFamilyCenter(position).y}
      />

      {
        marriage &&
        <TextFamilyElement data={marriage} position={position}/>
      }
    </g>
  );
};

export default FamilyElement;
