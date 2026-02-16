import { repoTypeDefs } from './repo.js';
import { userTypeDefs } from './user.js';

const rootTypeDefs = `#graphql
  type Query {
    _empty: String
  }
`;

export const typeDefs = [rootTypeDefs, repoTypeDefs, userTypeDefs];
