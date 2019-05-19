import React, { useState } from 'react';
import { graphql } from "react-apollo";

import Loading from "../../CoreApp/Loading";
import Error from "../../CoreApp/Error";
import {
  FAMILY,
} from '../../queries'
import PersonElemnt from './person-element'
import FamilyElement from './family-element';
import RenderChild from './render-child';
import {
  getPositionFamily,
  getPositionHusband,
  getPositionWife,
  getPositionChild,
  sizeRectPerson,
  paddingElement, sizeRectFamily
} from './formulas';


const RenderFamily = ({ position, sizeElement, setSizeElement, family, loading, error }) => {

  const [idMarriage, setIdMarriage] = useState(0);

  const [sizeFamily, setSizeFamily] = useState({
    width: 2 * sizeRectPerson.width + 4 * paddingElement,
    height: sizeRectPerson.height + sizeRectFamily.height + 4 * paddingElement,
  });

  if (sizeElement.width < sizeFamily.width) {
    setSizeElement({...sizeElement, width: sizeFamily.width})
  }

  if (sizeElement.height < sizeFamily.height) {
    setSizeElement({...sizeElement, height: sizeFamily.height})
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;

  const { marriageSet, childFamilySet } = family;
  const { husband, wife } = marriageSet[idMarriage];

  return (
    <g>
      <PersonElemnt position={getPositionHusband(position)} id={husband.id}/>
      <PersonElemnt position={getPositionWife(position)} id={wife.id}/>
      <FamilyElement position={getPositionFamily(position)} marriage={marriageSet[idMarriage]}/>
      <RenderChild position={getPositionChild(position)} childSet={childFamilySet}/>
    </g>
  );
};

const withQuery = graphql(FAMILY, {
  props: ({ data: { family, loading, error } }) => ({
    family, loading, error
  }),
  options: ({ id }) => ({
    variables: {
      id: id
    }
  })
});

export default withQuery(RenderFamily);
