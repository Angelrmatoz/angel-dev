import { repoResolvers } from './repo.ts';

// Combinamos todos los resolvers en un solo objeto
export const resolvers = {
  Query: {
    ...repoResolvers.Query,
  },
  // Si tienes Mutations:
  // Mutation: {
  //   ...userResolvers.Mutation,
  // }
};
