import React from 'react';

import PersonElemnt from './person-element'


const RenderChild = ({ position, childSet }) => {

  return (
    <PersonElemnt position={position} id={childSet[0].birth.person.id}/>
  )
};

export default RenderChild;
