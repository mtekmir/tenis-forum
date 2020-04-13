import gql from 'graphql-tag'

export const GET_POST = gql`
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
`
