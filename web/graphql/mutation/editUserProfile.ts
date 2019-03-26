import gql from 'graphql-tag';

export const editUserProfile = gql`
  mutation EditUserProfile($profileImageKey: String, $username: String) {
    editUserProfile(
      input: { profileImageKey: $profileImageKey, username: $username }
    ) {
      error {
        path
        message
      }
      success
    }
  }
`;
