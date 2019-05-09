import { gql } from "apollo-boost";

import { objectField, birthFragment } from './fragments';
import { marriageFragment } from '../../family-app/queries/fragments'


export const ALL_PERSON = gql`
query AllPerson{
  allPerson{
    id
    submitted
    birthSet{
      ...birth
    }
  }
}
${birthFragment.birth}
`;

export const PERSON = gql`
query Person($id: ID!){
  person(id: $id){
    ${objectField}
    user{
      id,
    },
    birthSet{
      ...birth
    },
    marriageHusbandSet{
      ...marriage
    },
    marriageWifeSet{
      ...marriage
    },
  }
}
${birthFragment.birth}
${marriageFragment.marriage}
`;

export const SAVE_PERSON = gql`
mutation SavePerson(
    $data: PersonInput
){
  savePerson(
     data: $data
  ){
    status
    formErrors
    person{
      id
    }
  }
}
`;

export const DELETE_PERSON = gql`
  mutation DeletePerson($id: ID!){
    deletePerson(id: $id){
      status
      formErrors
      id
    }
  }
`;



export const SEARCH_PERSON = gql`
query SearchPerson($searchTerm: String){
  searchPerson(searchTerm: $searchTerm){
    id
    birth{
      ...birth
    }
  }
}
${birthFragment.birth}
`;

// Birth
export const ALL_BIRTH = gql`
query AllBirth($id_person: ID){
  allBirth(idPerson: $id_person){
    ...birth
  }
}
${birthFragment.birth}
`;

export const SAVE_BIRTH = gql`
mutation SaveBirth(
    $data: BirthInput, 
){
  saveBirth(
     data: $data,
  ){
    status
    formErrors
    birth{
      id
    }
  }
}
`;

export const DELETE_BIRTH = gql`
  mutation DeleteBirth($id: ID!){
    deleteBirth(id: $id){
      status
      id
    }
  }
`;

export const LIKE_BIRTH = gql`
mutation LikeBirth($id: ID!, $email: String!){
  likeBirth(
      id: $id,
      email: $email,
  ){
    birth{
        likes
    }
  }
}
`;
