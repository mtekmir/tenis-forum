import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation createPost($text: String!, $threadId: Int!) {
    postCreate(input: { text: $text, threadId: $threadId }) {
      id
      text
      createdAt
      author {
        id
        username
        signature
        profileImageUrl
      }
    }
  }
`
