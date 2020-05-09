import gql from 'graphql-tag'

export const CREATE_REPORT = gql`
  mutation CreateReport($reason: String!, $postId: Int, $threadId: Int) {
    reportCreate(input: { reason: $reason, postId: $postId, threadId: $threadId }) {
      success
      error {
        path
        message
      }
    }
  }
`
