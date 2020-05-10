import gql from 'graphql-tag'

export const GET_LATEST_THREADS = gql`
  query GetLatestThreads {
    categoryGetLastThreads {
      id
      createdAt
      title
      forumId
      ownerId
      profileImageUrl
      username
    }
  }
`
