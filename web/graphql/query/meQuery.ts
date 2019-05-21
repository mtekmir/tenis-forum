import gql from 'graphql-tag';

export const meQuery = gql`
  query Me {
    me {
      username
      email
      permissions
      profileImageUrl
      profile {
        id
        gender
        location
        occupation
      }
    }
  }
`;
