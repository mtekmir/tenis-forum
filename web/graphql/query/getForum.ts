import gql from 'graphql-tag';

export const getForum = gql`
  query GetForum($id: Int!) {
    forumGet(id: $id) {
      id
      name
      threads {
        id
        title
        owner {
          username
        }
        createdAt
      }
    }
  }
`;
