import gql from 'graphql-tag';

export const getForum = gql`
  query GetForum($id: Int!, $cursor: Date) {
    forumGet(id: $id, cursor: $cursor) {
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
