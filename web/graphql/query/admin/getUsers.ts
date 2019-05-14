import gql from 'graphql-tag';

export const getAllUsers = gql`
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
`;
