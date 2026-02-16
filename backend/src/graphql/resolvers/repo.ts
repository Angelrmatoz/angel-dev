import { getPinnedRepos } from '../../services/github.services.ts';

export const repoResolvers = {
  Query: {
    pinnedRepos: async (_: any, { username }: { username: string }) => {
      return await getPinnedRepos(username);
    },
  },
};
