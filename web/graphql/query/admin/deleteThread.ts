import gql from 'graphql-tag';

export const deleteThread = gql`
  mutation DeleteThread($id: Int!) {
    threadDelete(id: $id) {
      error {
        message
      }
      success
    }
  }
`;
