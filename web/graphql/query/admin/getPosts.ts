import gql from 'graphql-tag';

export const getAllPosts = gql`
  query GetAllPosts(
    $id: String
    $filterBy: FilterBy
    $limit: Int
    $offset: Int
  ) {
    postGetAll(
      input: { id: $id, filterBy: $filterBy, limit: $limit, offset: $offset }
    ) {
      posts {
        id
        text
        createdAt
        authorId
        authorUsername
        threadId
        threadTitle
      }
    }
  }
`;
