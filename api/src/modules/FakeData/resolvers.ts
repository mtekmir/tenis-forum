import { createFakeData } from '../../services/fakeData';

export const resolvers = {
  Mutation: {
    fakeData: async () => createFakeData(),
  },
};
