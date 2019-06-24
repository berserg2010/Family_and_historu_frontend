import React, { useState, useEffect } from 'react';

import RenderFamily from './render-family'
import { graphql } from "react-apollo";
import { PERSON } from "../../queries";
import Loading from "../../CoreApp/Loading";
import Error from "../../CoreApp/Error";
import { getCenter } from "./formulas";
import PersonElement from './person-element';


const RenderTree = ({ sizeBlock, setSizeBlock, viewBox, id, person, loading, error }) => {

  const [sizeElement, setSizeElement] = useState({ width: 0, height: 0 });

  const [idMarriage, setIdMarriage] = useState(0);

  useEffect(() => {
    if (sizeBlock.width < sizeElement.width) {
      setSizeBlock({...sizeBlock, width: sizeElement.width})
    }

    if (sizeBlock.height < sizeElement.height) {
      setSizeBlock({...sizeBlock, height: sizeElement.height})
    }
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;

  const { marriageHusbandSet=[] } = person;
  const { family } = marriageHusbandSet.length && marriageHusbandSet[idMarriage];

  if (!family) {
    return <PersonElement id={id} position={getCenter(viewBox)} setSizeBlock={setSizeElement}/>
  } else {
    return <RenderFamily id={family.id} position={getCenter(viewBox)} sizeBlock={sizeElement} setSizeBlock={setSizeElement}/>
  }
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

export default withQuery(RenderTree);
