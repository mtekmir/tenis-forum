export const testRegisterMutation = `
mutation($username: String!, $email: String!, $password: String!) {
  register(input: { username: $username, email: $email, password: $password }) {
    error {
      path
      message
    }
    success
  }
}
`;

export const testLoginMutation = `
mutation($email: String!, $password: String!) {
  login(input: { email: $email, password: $password }) {
      error {
        path
        message
      }
      success
    }
  }
`;

export const testResetPasswordMutation = `
mutation($newPassword: String!, $key: String!) {
  resetPassword(input: { newPassword: $newPassword, key: $key }) {
    error {
      path
      message
    }
    success
  }
}
`;

export const testLogoutMutation = `
mutation {
  logout {
    success
  }
}
`;

export const testCreateForumMutation = `
  mutation($name: String!, $categoryId: Int!) {
    forumCreate(input: { name: $name, categoryId: $categoryId }) {
      id
      name
      category {
        id
        name
      }
    }
  }
`;

export const testCreateCategoryMutation = `
  mutation($name: String!) {
    categoryCreate(input: { name: $name }) {
      id
      name
    }
  }
`;

export const testCreateThreadMutation = `
  mutation($title: String!, $text: String!, $forumId: Int!) {
    threadCreate(input:  { title: $title, text: $text, forumId: $forumId }) {
      id
      title
    }
  }
`;

export const testCreatePostMutation = `
  mutation($text: String!, $threadId: Int!) {
    postCreate(input:  { text: $text, threadId: $threadId }) {
      id
      text
    }
  }
`;
