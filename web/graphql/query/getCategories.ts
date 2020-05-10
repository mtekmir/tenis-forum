import gql from 'graphql-tag'

export const GET_CATEGORIES = gql`
  query GetCategories {
    categoryGetAll {
      success
      categories {
        id
        name
        order
        forums {
          id
          order
          description
          threadCount
          postCount
          name
        }
      }
    }
  }
`
