import gql from 'graphql-tag';

export const getThread = gql`
  query GetThread($id: Int!, $offset: Int) {
    threadGet(id: $id, offset: $offset) {
      thread {
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
      postCount
    }
  }
`;
