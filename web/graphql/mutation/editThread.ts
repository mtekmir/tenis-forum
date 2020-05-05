import gql from 'graphql-tag'

export const EDIT_THREAD = gql`
  mutation EditThread($id: Int!, $title: String!) {
    threadEdit(input: { id: $id, title: $title }) {
      id
      title
      createdAt
      owner {
        id
        username
      }
    }
  }
`
