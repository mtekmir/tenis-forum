import gql from 'graphql-tag'

export const GET_ALL_FORUMS = gql`
  query GetAllForums {
    forumGetAll {
      forums {
        id
        name
        createdAt
        updatedAt
        threadCount
      }
    }
  }
`
