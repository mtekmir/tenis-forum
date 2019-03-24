import gql from 'graphql-tag';

export const getCategories = gql`
  query GetCategories {
    categoryGet {
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
