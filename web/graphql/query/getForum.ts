import gql from 'graphql-tag';

export const getForum = gql`
  query GetForum($id: Int!) {
    forumGet(id: $id) {
      id
      name
      category {
        name
      }
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
