import gql from 'graphql-tag';

export const getAllThreads = gql`
  query GetAllThreads {
    threadGetAll {
      threads {
        id
        title
        createdAt
        updatedAt
        postCount
      }
    }
  }
`;
