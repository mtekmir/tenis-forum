import gql from 'graphql-tag';

export const register = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(
      input: { email: $email, username: $username, password: $password }
    ) {
      success
      error {
        path
        message
      }
    }
  }
`;
