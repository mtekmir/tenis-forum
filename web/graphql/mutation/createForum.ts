import gql from 'graphql-tag';

export const createForum = gql`
  mutation CreateForum($name: String!, $categoryId: Int!) {
    forumCreate(input: { name: $name, categoryId: $categoryId }) {
      id
    }
  }
`;
