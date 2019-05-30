import gql from 'graphql-tag';

export const deletePost = gql`
  mutation DeletePost($id: Int!) {
    postDelete(id: $id) {
      id
      thread {
        id
      }
    }
  }
`;
