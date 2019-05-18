import React from 'react';

import { paddingElement, sizeRectFamily } from './formulas';


const TextFamilyElement = ({ data, positionRect }) => {

  const datetime = data.datetime
    ? JSON.parse(data.datetime)
    : {};

  const positionTextX = positionRect.x + sizeRectFamily.width / 2;
  const positionTextY = positionRect.y + sizeRectFamily.height / 2;

  return (
    <text
      x={positionTextX} y={positionTextY}
      textAnchor="middle"
    >
      <tspan x={positionTextX} y={positionTextY}>
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

  const positionRect = {
    x: position.x + paddingElement,
    y: position.y + paddingElement,
  };

  return (
    <g>
      <rect
        style={rectStyle}
        width={sizeRectFamily.width} height={sizeRectFamily.height}
        rx={5} ry={5}
        x={positionRect.x} y={positionRect.y}
      />

      {
        marriage &&
        <TextFamilyElement data={marriage} positionRect={positionRect}/>
      }
    </g>
  );
};

export default FamilyElement;
