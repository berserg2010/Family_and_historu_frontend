import React, { useState, useEffect } from 'react';
import { graphql } from "react-apollo";

import Loading from "../../CoreApp/Loading";
import Error from "../../CoreApp/Error";
import {
  FAMILY,
} from '../../queries'
import PersonElement from './person-element';
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


const RenderFamily = ({ position, sizeBlock, setSizeBlock, family, loading, error }) => {

  const [idMarriage, setIdMarriage] = useState(0);

  const [sizeElement, setSizeElement] = useState({ width: 0, height: 0 });

  const [sizeFamily, setSizeFamily] = useState({
    width: 2 * sizeRectPerson.width + 4 * paddingElement,
    height: sizeRectPerson.height + sizeRectFamily.height + 4 * paddingElement,
  });

  useEffect(() => {
    if (sizeBlock.width < sizeFamily.width) {
      setSizeBlock({...sizeBlock, width: sizeFamily.width})
    }

    if (sizeBlock.height < sizeFamily.height) {
      setSizeBlock({...sizeBlock, height: sizeFamily.height})
    }
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;

  const { marriageSet, childFamilySet } = family;
  const { husband, wife } = marriageSet[idMarriage];

  return (
    <g>
      <PersonElement position={getPositionHusband(position)} id={husband.id} setSizeBlock={setSizeElement}/>
      <PersonElement position={getPositionWife(position)} id={wife.id} setSizeBlock={setSizeElement}/>
      <FamilyElement position={getPositionFamily(position)} marriage={marriageSet[idMarriage]}/>
      <RenderChild position={getPositionChild(position)} childSet={childFamilySet} sizeBlock={sizeElement} setSizeBlock={setSizeElement} />
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
