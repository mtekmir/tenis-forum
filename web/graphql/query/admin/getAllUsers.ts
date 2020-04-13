import gql from 'graphql-tag'

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    userGetAll {
      users {
        id
        username
        email
        registerDate
        threadCount
        postCount
      }
    }
  }
`
