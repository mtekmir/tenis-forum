import gql from 'graphql-tag'

export const GET_CATEGORIES = gql`
  query GetCategories {
    categoryGetAll {
      success
      categories {
        id
        name
        threadCount
        postCount
        forums {
          id
          name
        }
      }
    }
  }
`
