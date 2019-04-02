import gql from 'graphql-tag';

export const createPost = gql`
  mutation createPost($text: String!, $threadId: Int!) {
    postCreate(input: { text: $text, threadId: $threadId }) {
      id
      text
      createdAt
      author {
        username
        profileImageUrl
      }
    }
  }
`;
