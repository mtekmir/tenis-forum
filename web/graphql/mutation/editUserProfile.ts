import gql from 'graphql-tag'

export const EDIT_USER_PROFILE = gql`
  mutation EditUserProfile(
    $profileImageKey: String
    $username: String
    $location: String
    $gender: Gender
    $occupation: String
  ) {
    editUserProfile(
      input: {
        profileImageKey: $profileImageKey
        username: $username
        location: $location
        gender: $gender
        occupation: $occupation
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
