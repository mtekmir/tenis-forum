import gql from 'graphql-tag'

export const GET_THREAD = gql`
  query GetThread($id: String!) {
    threadGet(input: { id: $id }) {
      thread {
        id
        title
        createdAt
        owner {
          id
          username
        }
      }
    }
  }
`
