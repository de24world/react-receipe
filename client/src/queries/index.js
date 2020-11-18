import { gql } from "apollo-boost";

export const GETL_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      name
      description
      category
      likes
      createdDate
    }
  }
`;
