import React from 'react';

import RenderPerson from './render-person';
import RenderFamily from './render-family'


const RenderTree = ({ viewBox }) => {

  return (
    <RenderPerson id={1} viewBox={viewBox}/>
    // <RenderFamily id={4} viewBox={viewBox}/>
  )
};

export default RenderTree;
