import gql from 'graphql-tag';

export const createCategory = gql`
  mutation CreateCategory($name: String!) {
    categoryCreate(input: { name: $name }) {
      error {
        path
        message
      }
      success
    }
  }
`;
