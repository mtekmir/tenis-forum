import { dashboardGet } from './getDashboard';
import { adminLogin } from './login';

export const resolvers = {
  Mutation: {
    adminLogin,
  },
  Query: {
    dashboardGet,
  },
};
