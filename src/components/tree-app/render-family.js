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
import { getPositionFamily, getPositionHusband, getPositionWife, getPositionChild } from './formulas';


const RenderFamily = ({ viewBox, family, loading, error }) => {

  const [idMarriage, setIdMarriage] = useState(0);

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;

  const { marriageSet, childFamilySet } = family;
  const { husband, wife } = marriageSet[idMarriage];

  return (
    <g>
      <PersonElemnt position={getPositionHusband(viewBox)} id={husband.id}/>
      <PersonElemnt position={getPositionWife(viewBox)} id={wife.id}/>
      <FamilyElement position={getPositionFamily(viewBox)} marriage={marriageSet[idMarriage]}/>
      <RenderChild position={getPositionChild(viewBox)} childSet={childFamilySet}/>
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
