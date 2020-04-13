import gql from 'graphql-tag'

export const GET_FORUM = gql`
  query GetForum($id: Int!, $offset: Int, $limit: Int) {
    forumGet(id: $id, offset: $offset, limit: $limit) {
      forum {
        id
        name
        createdAt
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
`
