import { gql } from "apollo-boost";

import { marriageFragment, childFragment } from './fragments';


// FAMILY
export const ALL_FAMILY = gql`
query AllFamily{
  allFamily{
    id
    submitted
    marriageSet{
      ...marriage
    }
  }
}
${marriageFragment.marriage}
`;

export const FAMILY = gql`
query Family($id: ID!){
  family(id: $id){
    id,
    note,
    submitted,
    submitter{
      email
    },
  }
}
`;

export const SAVE_FAMILY = gql`
mutation SaveFamily(
    $data: FamilyInput
){
  saveFamily(
     data: $data
  ){
    status
    formErrors
    family{
      id
    }
  }
}
`;

export const DELETE_FAMILY = gql`
  mutation DeleteFamily($id: ID!){
    deleteFamily(id: $id){
      status
      formErrors
      id
    }
  }
`;



export const SEARCH_FAMILY = gql`
query SearchFamily($searchTerm: String){
  searchFamily(searchTerm: $searchTerm){
    id
    marriage{
      ...marriage
    }
  }
}
${marriageFragment.marriage}
`;

// MARRIAGE
export const ALL_MARRIAGE = gql`
query AllMarriage($id_family: ID){
  allMarriage(idFamily: $id_family){
    ...marriage
  }
}
${marriageFragment.marriage}
`;

export const MARRIAGE = gql`
query Marriage($id: ID){
	marriage(id: $id){
		...marriage
	}
}
${marriageFragment.marriage}
`;

export const SAVE_MARRIAGE = gql`
mutation SaveMarriage($data: MarriageInput){
  saveMarriage(data: $data){
    status
    formErrors
    marriage{
      id
    }
  }
}
`;

export const DELETE_MARRIAGE = gql`
  mutation DeleteMarriage($id: ID!){
    deleteMarriage(id: $id){
      status
      id
    }
  }
`;

export const LIKE_MARRIAGE = gql`
mutation LikeMarriage($id: ID!, $email: String!){
  likeMarriage(
      id: $id,
      email: $email,
  ){
    marriage{
        likes
    }
  }
}
`;

// CHILD
export const ALL_CHILD = gql`
query AllChild($id_family: ID){
  allChild(idFamily: $id_family){
    ...child
  }
}
${childFragment.child}
`;

export const CHILD = gql`
query Child($id: ID){
	child(id: $id){
		...child
	}
}
${childFragment.child}
`;

export const SAVE_CHILD = gql`
mutation SaveChild($data: ChildInput){
  saveChild(data: $data){
    status
    formErrors
    child{
      id
    }
  }
}
`;

export const DELETE_CHILD = gql`
  mutation DeleteChild($id: ID!){
    deleteChild(id: $id){
      status
      id
    }
  }
`;
