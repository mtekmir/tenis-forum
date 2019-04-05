import gql from 'graphql-tag';

export const getThread = gql`
  query GetThread($id: Int!, $cursor: Date) {
    threadGet(id: $id, cursor: $cursor) {
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
          profileImageUrl
        }
      }
    }
  }
`;
