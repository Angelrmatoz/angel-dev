import { getPinnedRepos } from '../../services/github.services.js';

export const repoResolvers = {
  Query: {
    pinnedRepos: async (_: any, { username }: { username: string }) => {
      return await getPinnedRepos(username);
    },
  },
};
