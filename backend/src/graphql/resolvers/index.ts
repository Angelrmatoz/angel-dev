import { repoResolvers } from './repo.js';
import { userResolvers } from './user.js';

// Combinamos todos los resolvers en un solo objeto
export const resolvers = {
  Query: {
    ...repoResolvers.Query,
    ...userResolvers.Query,
  },
};
