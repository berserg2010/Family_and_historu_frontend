import React, { useState } from 'react';


const TextPersonElement = ({ data, viewRect }) => {

  const { surname, givname } = data;

  const rectWidth = getWidth(viewRect);
  const rectHeight = getHeight(viewRect);

  const positionTextX = viewRect[0] + rectWidth / 2;
  const positionTextY = viewRect[1] + rectHeight / 2;

  return (
    <text
      x={positionTextX} y={positionTextY}
      // fill="red"
      textAnchor="middle"
    >
      <tspan x={positionTextX} y={positionTextY - 10}>
        {surname}
      </tspan>
      <tspan x={positionTextX} y={positionTextY + 10}>
        {givname}
      </tspan>
    </text>
  )
};

const getWidth = (element) => {
  return element[2] - element[0]
};

const getHeight = (element) => {
  return element[3] - element[1]
};

const getCenter = (container, element) => {
  const containerWidth = getWidth(container);
  const containerHeight = getHeight(container);

  const elementWidth = getWidth(element);
  const elementHeight = getHeight(element);

  return [
    (containerWidth - elementWidth) / 2,
    (containerHeight - elementHeight) / 2,
    elementWidth + (containerWidth - elementWidth) / 2,
    elementHeight + (containerHeight - elementHeight) / 2,
  ]

};

const PersonElement = ({ data={}, viewBox }) => {

  const [idBirth, setIdBirth] = useState(0);

  const { person: { birthSet=[] }={} } = data;
  const { gender='U' } = birthSet.length && birthSet[idBirth];

  const viewRect = [0, 0, 200, 100];

  const viewRectPosition = getCenter(viewBox, viewRect);

  const rectStyle = {
    strokeWidth: 3,
  };

  if (!data.person){

    rectStyle.fill = '#dedede';
    rectStyle.stroke = '#bcbcbc';

  } else {

    rectStyle.fill = gender === 'F' ? '#ffa6be' : '#a1bfff';
    rectStyle.stroke = gender === 'F' ? '#ff7da0' : '#709dff';

  }

  return (
    <g>
      <rect
        // id={id}
        style={rectStyle}
        width={viewRect[2]} height={viewRect[3]}
        rx={5} ry={5}
        x={viewRectPosition[0]} y={viewRectPosition[1]}
      />

      { data.person && <TextPersonElement data={birthSet[idBirth]} viewRect={viewRectPosition}/>}
    </g>
  );
};

export default PersonElement;
