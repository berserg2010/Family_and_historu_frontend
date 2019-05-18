import React, { useState } from 'react';

import RenderPerson from './render-person';
import RenderFamily from './render-family'


const RenderTree = ({ viewBox }) => {

  const [sizeElement, setSizeElement] = useState({width: 0, height: 0});


  return (
    // <RenderPerson id={1} viewBox={viewBox}/>
    <RenderFamily id={4} viewBox={viewBox}/>
  )
};

export default RenderTree;
