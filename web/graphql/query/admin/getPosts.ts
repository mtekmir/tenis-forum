import gql from 'graphql-tag';

export const getAllPosts = gql`
  query GetAllPosts {
    postGetAll {
      posts {
        id
        createdAt
        authorId
        authorUsername
        threadId
        threadTitle
      }
    }
  }
`;
