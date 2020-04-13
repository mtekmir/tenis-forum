import gql from 'graphql-tag'

export const GET_DASHBOARD = gql`
  query GetDashboard {
    dashboardGet {
      userCount
      categoryCount
      forumCount
      threadCount
      postCount
    }
  }
`
