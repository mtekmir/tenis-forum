import gql from 'graphql-tag';

export const createThread = gql`
  mutation createThread($text: String!, $title: String!, $forumId: Int!) {
    threadCreate(input: { text: $text, title: $title, forumId: $forumId }) {
      id
      title
    }
  }
`;
