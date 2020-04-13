import gql from 'graphql-tag'

export const ADMIN_LOGIN = gql`
  mutation AdminLogin($email: String!, $password: String!) {
    adminLogin(input: { email: $email, password: $password }) {
      error {
        path
        message
      }
      success
    }
  }
`
