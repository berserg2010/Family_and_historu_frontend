import React, {useEffect, useState} from 'react';
import { graphql } from "react-apollo";

import Loading from "../../CoreApp/Loading";
import Error from "../../CoreApp/Error";
import {
  PERSON,
} from '../../queries';

import { sizeRectPerson, getPositionPersonCenter } from './formulas';


const TextPersonElement = ({ data, position }) => {

  const { surname, givname } = data;
  const datetime = data.datetime
    ? JSON.parse(data.datetime)
    : {};

  return (
    <text
      x={position.x} y={position.y}
      textAnchor="middle"
    >
      <tspan x={position.x} y={position.y - 10}>
        {surname}
      </tspan>
      <tspan x={position.x} y={position.y + 10}>
        {givname}
      </tspan>
      <tspan x={position.x} y={position.y + 30}>
        {datetime.day}.{datetime.month}.{datetime.year}
      </tspan>
    </text>
  )
};

const PersonElement = ({ position, person, setSizeBlock, loading, error }) => {

  useEffect(() => {
    setSizeBlock({width: sizeRectPerson.width, height: sizeRectPerson.height})
  });

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

  return (
    <g id={`person${person.id}`}>
      <rect
        // id={id}
        style={rectStyle}
        width={sizeRectPerson.width} height={sizeRectPerson.height}
        rx={5} ry={5}
        x={getPositionPersonCenter(position).x} y={getPositionPersonCenter(position).y}
      />

      { person && <TextPersonElement data={birthSet[idBirth]} position={position}/> }
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
