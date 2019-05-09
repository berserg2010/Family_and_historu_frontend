import { gql } from "apollo-boost";


export const objectField = `
  id,
  note,
  submitted,
  submitter{
    id,
  },
  changed,
  changer{
    id,
  },
`;

export const eventField = `
  ${objectField}
  datetime,
`;

export const birthFragment = {
  birth: gql`
    fragment birth on BirthType{
      gender,
      childBirthSet{
        id,
        reltofath,
        reltomoth,
        childnbrfath,
        childnbrmoth,
        family{
          id,
        },
        birth{
          id,
        },
      }
      likes,
      person{
        id,
      },
      givname,
      surname,
      ${eventField}
    }
  `
};
