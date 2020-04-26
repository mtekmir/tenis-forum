import gql from 'graphql-tag'

export const ME_QUERY = gql`
  query Me {
    me {
      id
      username
      email
      permissions
      signature
      profileImageUrl
      profile {
        id
        gender
        location
        occupation
      }
    }
  }
`
