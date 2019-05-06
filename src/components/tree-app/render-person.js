import React, { useState } from 'react';


const RenderPerson = ({ data, width, height }) => {

  const [ idBirth, setIdBirth ] = useState(0);

  const { person: { birthSet } } = data;
  const { gender, surname, givname } = birthSet[idBirth];

  const widthRect = 200,
        heightRect = 100;

  const relativePosX = (width - widthRect) / 2;
  const relativePosY = (height - heightRect) / 2;

  const relativePosTextX = relativePosX + widthRect/2;
  const relativePosTextY = relativePosY + heightRect/2;

  // console.log(`viewBox: ${width} ${height}`);

  const rectStyle = {
    fill: gender === 'F' ? '#ffa6be' : '#a1bfff',
    strokeWidth: 3,
    stroke: gender === 'F' ? '#ff7da0' : '#709dff',
  };

  return (
    <g>
      <rect
        id={1}
        style={rectStyle}
        width={widthRect} height={heightRect}
        rx={5} ry={5}
        x={relativePosX} y={relativePosY}
      />

      <text
        x={relativePosTextX} y={relativePosTextY}
        // fill="red"
        textAnchor="middle"
      >
        <tspan x={relativePosTextX} y={relativePosTextY - 10}>
          {surname}
        </tspan>
        <tspan x={relativePosTextX} y={relativePosTextY + 10}>
          {givname}
        </tspan>
      </text>
    </g>
  );
};

export default RenderPerson;
