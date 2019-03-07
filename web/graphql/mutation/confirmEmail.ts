import gql from 'graphql-tag';

export const confirmEmail = gql`
  mutation ConfirmEmail($token: String!) {
    confirmUserEmail(token: $token) {
      success
      error {
        path
        message
      }
    }
  }
`;
