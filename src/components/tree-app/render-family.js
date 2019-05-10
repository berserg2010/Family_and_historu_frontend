import React from 'react';

import Loading from "../../CoreApp/Loading";
import Error from "../../CoreApp/Error";
import {
  FAMILY,
} from '../../queries'
import FamilyElement from './family-element';
import {graphql} from "react-apollo";


const RenderFamily = ({ viewBox, family, loading, error }) => {

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;

  return (
    <FamilyElement viewBox={viewBox}/>
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
