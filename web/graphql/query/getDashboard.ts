import gql from 'graphql-tag';

export const getDashboard = gql`
  query GetDashboard {
    dashboardGet {
      userCount
      categoryCount
      forumCount
      threadCount
      postCount
    }
  }
`;