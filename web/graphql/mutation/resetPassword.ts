import gql from 'graphql-tag';

export const resetPassword = gql`
  mutation ResetPassword($newPassword: String!, $pwResetToken: String!) {
    resetPassword(
      input: { newPassword: $newPassword, pwResetToken: $pwResetToken }
    ) {
      success
      error {
        path
        message
      }
    }
  }
`;
