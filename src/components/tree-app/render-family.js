import React from 'react';


const RenderFamily = ({ data }) => {

  const width = 200,
        heigth = 100;

  const relativePosX = (400 - 200) / 2;
  const relativePosY = (400 - 100) / 2;

  const relativePosTextX = relativePosX + width/2;
  const relativePosTextY = relativePosY + heigth/2;

  const rectStyle = {
    fill: '#fac78c',
    strokeWidth: 3,
    stroke: '#fcae53',
  };

  return (
    <g>
    <rect
      id={1}
      style={rectStyle}
      width={width} height={heigth}
      rx={5} ry={5}
      x={relativePosX} y={relativePosY + heigth}
    />

    {/*<text*/}
    {/*  x={relativePosTextX} y={relativePosTextY}*/}
    {/*  // fill="red"*/}
    {/*  textAnchor="middle"*/}
    {/*>*/}
    {/*  <tspan x={relativePosTextX} y={relativePosTextY - 10}>*/}
    {/*    {data.person.birthSet[0].surname}*/}
    {/*  </tspan>*/}
    {/*  <tspan x={relativePosTextX} y={relativePosTextY + 10}>*/}
    {/*    {data.person.birthSet[0].givname}*/}
    {/*  </tspan>*/}
    {/*</text>*/}
    </g>
  );
};

export default RenderFamily;
