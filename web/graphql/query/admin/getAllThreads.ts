import gql from 'graphql-tag'

export const GET_ALL_THREADS = gql`
  query GetAllThreads($id: String, $filterBy: FilterBy, $limit: Int, $offset: Int) {
    threadGetAll(input: { id: $id, filterBy: $filterBy, limit: $limit, offset: $offset }) {
      threads {
        id
        title
        createdAt
        updatedAt
        postCount
      }
    }
  }
`
