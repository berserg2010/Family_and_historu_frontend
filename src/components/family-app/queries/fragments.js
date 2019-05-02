import { gql } from "apollo-boost";


export const marriageFragment = {
  marriage: gql`
    fragment marriage on MarriageType{
      id,
      family{
        id,
      },
      husband{
        id
        birthSet{
          surname
          givname
        }
      }
      wife{
        id
        birthSet{
          surname
          givname
        }
      }
      husbname,
      wifename,
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

export const childFragment = {
  child: gql`
    fragment child on ChildType{
      id,
      childnbrfath,
      childnbrmoth,
      reltofath,
      reltomoth,
      birth{
        id,
        surname,
        givname,
      }
    }
  `
};
