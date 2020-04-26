import gql from 'graphql-tag'

export const SEND_FEEDBACK = gql`
  mutation SendFeedback(
    $name: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    userSendFeedback(
      input: { name: $name, email: $email, subject: $subject, message: $message }
    ) {
      success
      error {
        path
        message
      }
    }
  }
`
