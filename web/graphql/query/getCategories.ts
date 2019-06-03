import gql from 'graphql-tag';

export const getCategories = gql`
  query GetCategories {
    categoryGetAll {
      success
      categories {
        id
        name
        forums {
          id
          name
        }
      }
    }
  }
`;
