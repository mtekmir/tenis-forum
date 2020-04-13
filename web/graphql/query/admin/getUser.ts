import gql from 'graphql-tag'

export const GET_USER = gql`
  query GetUser($id: String!) {
    userGet(id: $id) {
      id
      username
      email
      createdAt
      permissions
      profileImageUrl
      password
      profile {
        id
        location
        gender
        occupation
      }
    }
  }
`
