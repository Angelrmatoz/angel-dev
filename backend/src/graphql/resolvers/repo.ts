import {
  getPinnedRepos,
  getRecentRepos,
} from "../../services/github.services.js";

export const repoResolvers = {
  Query: {
    pinnedRepos: async (_: any, { username }: { username: string }) => {
      return await getPinnedRepos(username);
    },
    recentRepos: async (_: any, { username }: { username: string }) => {
      return await getRecentRepos(username);
    },
  },
};
