import gql from 'graphql-tag';

export const getThread = gql`
  query GetThread($id: Int!) {
    threadGet(id: $id) {
      id
      title
      createdAt
      owner {
        username
      }

      posts {
        id
        text
        createdAt
        author {
          id
          username
        }
      }
    }
  }
`;
