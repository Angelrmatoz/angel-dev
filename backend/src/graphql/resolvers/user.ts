import { getUserData } from '../../services/github.services.js';

export const userResolvers = {
  Query: {
    me: async (_: any, { username }: { username: string }) => {
      return await getUserData(username);
    },
  },
};
