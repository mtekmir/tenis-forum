import gql from 'graphql-tag';

export const adminLogin = gql`
  mutation AdminLogin($email: String!, $password: String!) {
    adminLogin(input: { email: $email, password: $password }) {
      error {
        path
        message
      }
      success
    }
  }
`;
