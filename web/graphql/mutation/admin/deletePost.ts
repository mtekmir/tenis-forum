import gql from 'graphql-tag'

export const DELETE_POST = gql`
  mutation DeletePost($id: Int!) {
    postDelete(id: $id) {
      id
      thread {
        id
      }
    }
  }
`
