import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PORT } from './utils/config.ts';
import { typeDefs } from './graphql/typeDefs/index.ts';
import { resolvers } from './graphql/resolvers/index.ts';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: Number(PORT) },
});

console.log(`🚀 Server ready at: ${url}`);