import gql from 'graphql-tag';

export const getAllCategories = gql`
  query GetAllCategories {
    categoryGetAll {
      categories {
        id
        name
      }
    }
  }
`;
