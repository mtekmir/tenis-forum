import gql from 'graphql-tag'

export const EDIT_POST = gql`
  mutation EditPost($postId: Int!, $text: String!) {
    postEdit(input: { postId: $postId, text: $text }) {
      id
      text
      createdAt
      updatedAt
      author {
        id
        username
        signature
        profileImageUrl
      }
    }
  }
`
