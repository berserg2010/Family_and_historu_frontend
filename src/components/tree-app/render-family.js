import React from 'react';
import { graphql } from "react-apollo";

import Loading from "../../CoreApp/Loading";
import Error from "../../CoreApp/Error";
import {
  FAMILY,
} from '../../queries'
import PersonElemnt from './person-element'
import FamilyElement from './family-element';
import { getPositionFamily, getPositionHusband, getPositionWife } from './formulas';


const RenderFamily = ({ viewBox, family, loading, error }) => {

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;

  const { marriageSet } = family;
  const { husband, wife } = marriageSet[0];

  return (
    <g>
      <PersonElemnt position={getPositionHusband(viewBox)} id={husband.id}/>
      <PersonElemnt position={getPositionWife(viewBox)} id={wife.id}/>
      <FamilyElement position={getPositionFamily(viewBox)} marriage={marriageSet}/>
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
