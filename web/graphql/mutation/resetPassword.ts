import gql from 'graphql-tag'

export const RESET_PASSWORD = gql`
  mutation ResetPassword($newPassword: String!, $pwResetToken: String!) {
    resetPassword(input: { newPassword: $newPassword, pwResetToken: $pwResetToken }) {
      success
      error {
        path
        message
      }
    }
  }
`
