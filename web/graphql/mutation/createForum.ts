import gql from 'graphql-tag'

export const CREATE_FORUM = gql`
  mutation CreateForum($name: String!, $categoryId: Int!) {
    forumCreate(input: { name: $name, categoryId: $categoryId }) {
      id
    }
  }
`
