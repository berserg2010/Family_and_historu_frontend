import React from 'react';

import PersonElement from './person-element';


const RenderPerson = ({ viewBox, id }) => {

  return (
    <PersonElement id={id} viewBox={viewBox}/>
  );
};


export default RenderPerson;
