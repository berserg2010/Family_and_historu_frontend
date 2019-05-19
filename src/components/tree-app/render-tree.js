import React, { useState } from 'react';

import RenderFamily from './render-family'
import { graphql } from "react-apollo";
import { PERSON } from "../../queries";
import Loading from "../../CoreApp/Loading";
import Error from "../../CoreApp/Error";
import { getCenter, sizeRectPerson, paddingElement } from "./formulas";
import PersonElement from './person-element';


const RenderTree = ({ viewPort, setViewPort, viewBox, id, person, loading, error }) => {

  const [sizeElementChild, setSizeElementChild] = useState({
    width: sizeRectPerson.width + 2 * paddingElement,
    height: sizeRectPerson.height + 2 * paddingElement,
  });

  const [idMarriage, setIdMarriage] = useState(0);

  if (viewPort[2] < sizeElementChild.width) {
    setViewPort([viewPort[0], viewPort[1], sizeElementChild.width, viewPort[3]])
  }

  if (viewPort[3] < sizeElementChild.height) {
    setViewPort([viewPort[0], viewPort[1], viewPort[2], sizeElementChild.height])
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;

  const { marriageHusbandSet=[] } = person;
  const { family } = marriageHusbandSet.length && marriageHusbandSet[idMarriage];

  if (!family) {
    return <PersonElement id={id} position={getCenter(viewBox)}/>
  } else {
    return <RenderFamily id={family.id} position={getCenter(viewBox)} sizeElement={sizeElementChild} setSizeElement={setSizeElementChild}/>
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
