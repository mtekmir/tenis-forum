import gql from 'graphql-tag'

export const GET_THREAD_POSTS = gql`
  query GetThreadPosts($threadId: String!, $page: Int) {
    threadGetPosts(input: { threadId: $threadId, page: $page }) {
      posts {
        id
        text
        createdAt
        author {
          id
          username
          profileImageUrl
        }
      }
      count
    }
  }
`
