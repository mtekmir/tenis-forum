import gql from 'graphql-tag'

export const GET_CATEGORY = gql`
  query GetCategory($id: Int!, $limit: Int) {
    categoryGet(id: $id, limit: $limit) {
      id
      name
      forums {
        id
        name
      }
    }
  }
`
