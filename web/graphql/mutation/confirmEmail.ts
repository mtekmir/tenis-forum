import gql from 'graphql-tag'

export const CONFIRM_EMAIL = gql`
  mutation ConfirmEmail($token: String!) {
    confirmUserEmail(token: $token) {
      success
      error {
        path
        message
      }
    }
  }
`
