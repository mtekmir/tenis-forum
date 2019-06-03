import gql from 'graphql-tag';

export const getCategory = gql`
  query GetCategory($id: Int!, $limit: Int) {
    categoryGet(id: $id, limit: $limit) {
      id
      name
      forums {
        id
        name
      }
    }
  }
`;
