import gql from 'graphql-tag';

export const getForum = gql`
  query GetForum($id: Int!, $offset: Int) {
    forumGet(id: $id, offset: $offset) {
      forum {
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
      threadCount
    }
  }
`;
