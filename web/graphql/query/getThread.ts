import gql from 'graphql-tag';

export const getThread = gql`
  query GetThread($id: String!, $offset: Int, $limit: Int) {
    threadGet(input: { id: $id, offset: $offset, limit: $limit }) {
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
