import gql from 'graphql-tag'

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!) {
    categoryCreate(input: { name: $name }) {
      id
      name
    }
  }
`
