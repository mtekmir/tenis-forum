import gql from 'graphql-tag'

export const GET_LATEST_POSTS = gql`
  query GetLatestPosts($forumId: Int!) {
    threadGetLastPosts(input: { forumId: $forumId }) {
      id
      createdAt
      authorId
      profileImageUrl
      username
      threadId
    }
  }
`
