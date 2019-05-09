import React from 'react';
import { graphql } from 'react-apollo';

import PersonElement from './person-element';
import { PERSON } from '../person-app/queries'

const mockTree = {
  person: {
    __typename: 'PersonType',
    id: 1,
    birthSet: [
      {
        gender: 'M',
        surname: "Пушкин",
        givname: "Александр",
        childBirthSet: [
          {
            family: {
              __typename: 'FamilyType',
              id: 1
            }
          }
        ]
      }
    ],
    marriageHusbandSet: [
      {
        family: {
          __typename: 'FamilyType',
          id: 2
        }
      }
    ],
    marriageWifeSet: []
  }
};

const stepDown = (item) => {
  if (item.__typename === 'PersonType') {
    const { birthSet } = item;
    const { gender } = birthSet[0];

    if (gender === 'F'){
      const { marriageWifeSet } = item;
      const { family: { id } } = marriageWifeSet[0];

    } else {
      const { marriageHusbandSet } = item;
      const { family: { id } } = marriageHusbandSet[0];
    }

    // get query family
  }

  if (item.__typename === 'FamilyType'){

  }

  // get query person
};

const RenderTree = ({ viewBox, id }) => {
  return (
    <PersonElement data={mockTree} viewBox={viewBox}/>
  )
};

const withQuery = graphql(PERSON, {
  props: ({ data: { person, loading, error } }) => ({
    person, loading, error
  }),
  // skip: ({ id }) => {
  //   return !id
  // },
  options: ({ id }) => ({
    variables: {
      id: id
    }
  })
});

export default withQuery(RenderTree);
