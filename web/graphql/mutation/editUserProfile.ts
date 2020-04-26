import gql from 'graphql-tag'

export const EDIT_USER_PROFILE = gql`
  mutation EditUserProfile(
    $profileImageKey: String
    $username: String
    $location: String
    $gender: Gender
    $occupation: String
    $signature: String
  ) {
    editUserProfile(
      input: {
        profileImageKey: $profileImageKey
        username: $username
        location: $location
        gender: $gender
        occupation: $occupation
        signature: $signature
      }
    ) {
      error {
        path
        message
      }
      success
    }
  }
`
