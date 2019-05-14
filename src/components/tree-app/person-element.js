import React, { useState } from 'react';
import { graphql } from "react-apollo";

import Loading from "../../CoreApp/Loading";
import Error from "../../CoreApp/Error";
import { sizeRectPerson, paddingElement } from './formulas';
import {
  PERSON,
} from '../../queries'


const TextPersonElement = ({ data, positionRect }) => {

  const { surname, givname } = data;

  const positionTextX = positionRect.x + sizeRectPerson.width / 2;
  const positionTextY = positionRect.y + sizeRectPerson.height / 2;

  return (
    <text
      x={positionTextX} y={positionTextY}
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

const PersonElement = ({ position, person, loading, error }) => {

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

  const positionRect = {
    x: position.x + paddingElement,
    y: position.y + paddingElement,
  };

  return (
    <g id={`person${person.id}`}>
      <rect
        // id={id}
        style={rectStyle}
        width={sizeRectPerson.width} height={sizeRectPerson.height}
        rx={5} ry={5}
        x={positionRect.x} y={positionRect.y}
      />

      { person && <TextPersonElement data={birthSet[idBirth]} positionRect={positionRect}/> }
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
