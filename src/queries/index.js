import { gql } from "apollo-boost";


export const CURRENT_USER = gql`
	query CurrentUser{
	  currentUser{
	    id
	    email
	    firstName
	    lastName
	    dateJoined
      personAppBirthLikesSet{
        person{
          id
		    }
		  }
	  }
	}
`;


export const SEARCH_PERSON = gql`
query SearchPerson($searchTerm: String){
  searchPerson(searchTerm: $searchTerm){
    id
  }
}
`;
