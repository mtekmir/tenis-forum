import gql from 'graphql-tag'

export const DELETE_THREAD = gql`
  mutation DeleteThread($id: Int!) {
    threadDelete(id: $id) {
      id
      forum {
        id
      }
    }
  }
`
