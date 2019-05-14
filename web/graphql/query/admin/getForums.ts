import gql from 'graphql-tag';

export const getForums = gql`
  query GetAllForums {
    forumGetAll {
      forums {
        id
        name
        createdAt
        updatedAt
        threadCount
      }
    }
  }
`;
