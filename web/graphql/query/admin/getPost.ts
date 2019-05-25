import gql from 'graphql-tag';

export const getPost = gql`
  query GetPost($id: Int!) {
    postGet(id: $id) {
      id
      createdAt
      text
      authorId
      authorUsername
      threadId
      threadTitle
    }
  }
`;
