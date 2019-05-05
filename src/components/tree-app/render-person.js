import React, { useState } from 'react';


const RenderPerson = ({ data }) => {

  const [ idBirth, setIdBirth ] = useState(0);

  const { person: { birthSet } } = data;
  const { gender, surname, givname } = birthSet[idBirth];

  const width = 200,
        heigth = 100;

  const relativePosX = (400 - 200) / 2;
  const relativePosY = (400 - 100) / 2;

  const relativePosTextX = relativePosX + width/2;
  const relativePosTextY = relativePosY + heigth/2;

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
      width={width} height={heigth}
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
