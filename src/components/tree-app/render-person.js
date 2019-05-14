import React from 'react';

import PersonElement from './person-element';

import { sizeRectPerson, getCenter } from "./formulas";


const RenderPerson = ({ id, viewBox }) => {

  return (
    <PersonElement id={id} position={getCenter(viewBox, sizeRectPerson)}/>
  );
};


export default RenderPerson;
