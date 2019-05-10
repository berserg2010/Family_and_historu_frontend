import React, { useState } from 'react';
import { graphql } from "react-apollo";

import Loading from "../../CoreApp/Loading";
import Error from "../../CoreApp/Error";
import { sizeRectPerson, getCenter, getWidth, getHeight } from './formulas';
import {
  PERSON,
} from '../../queries'


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

const PersonElement = ({ viewBox, person, loading, error }) => {

  const [idBirth, setIdBirth] = useState(0);

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;

  const { birthSet=[] } = person;
  const { gender='U' } = birthSet.length && birthSet[idBirth];

  const rectStyle = {
    strokeWidth: 3,
  };

  if (!person){

    rectStyle.fill = '#dedede';
    rectStyle.stroke = '#bcbcbc';

  } else {

    rectStyle.fill = gender === 'F' ? '#ffa6be' : '#a1bfff';
    rectStyle.stroke = gender === 'F' ? '#ff7da0' : '#709dff';

  }

  const viewRectPosition = getCenter(viewBox, sizeRectPerson);

  return (
    <g>
      <rect
        // id={id}
        style={rectStyle}
        width={sizeRectPerson[2]} height={sizeRectPerson[3]}
        rx={5} ry={5}
        x={viewRectPosition[0]} y={viewRectPosition[1]}
      />

      { person && <TextPersonElement data={birthSet[idBirth]} viewRect={viewRectPosition}/> }
    </g>
  );
};

const withQuery = graphql(PERSON, {
  props: ({ data: { person, loading, error } }) => ({
    person, loading, error
  }),
  options: ({ id }) => ({
    variables: {
      id: id
    }
  })
});

export default withQuery(PersonElement);
