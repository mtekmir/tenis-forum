import gql from 'graphql-tag'

export const CREATE_THREAD = gql`
  mutation createThread($text: String!, $title: String!, $forumId: Int!) {
    threadCreate(input: { text: $text, title: $title, forumId: $forumId }) {
      id
      title
    }
  }
`
