import { gql } from "apollo-boost";


export const birthFragment = {
  birth: gql`
    fragment birth on BirthType{
      id,
      person{
        id,
      },
      gender,
      givname,
      surname,
      likes,
      
      # object
      note,
      submitted,
      submitter{
        id,
      },
      changed,
      changer{
        id,
      },
      
      # event
      datetime,
    }
  `
};
