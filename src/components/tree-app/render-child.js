import React, { useEffect, useState} from 'react';

import RenderTree from './render-tree'


const RenderChild = ({ position, childSet, sizeBlock, setSizeBlock }) => {

  const [sizeElement, setSizeElement] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (sizeBlock.width <= sizeElement.width) {
      setSizeBlock({...sizeBlock, width: sizeElement.width})
    }

    if (sizeBlock.height < sizeElement.height) {
      setSizeBlock({...sizeBlock, height: sizeElement.height})
    }
  });

  return (
    childSet.length
      ? childSet.map((item) => {
        return (
          //<RenderTree position={position} key={item.birth.person.id} id={item.birth.person.id} sizeBlock={sizeElement} setSizeBlock={setSizeElement}/>
        null
        )})
      : null
  )
};

export default RenderChild;
