import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import type { ApolloServerPlugin } from '@apollo/server';
import { PORT } from './utils/config.js';
import { typeDefs } from './graphql/typeDefs/index.js';
import { resolvers } from './graphql/resolvers/index.js';
import { context } from './graphql/context.js';

const isDev = process.env.NODE_ENV !== 'production';

/* eslint-disable @typescript-eslint/no-unused-vars */
// Plugin factory para loguear requests en desarrollo (similar a morgan pero integrado)
const createDevLoggingPlugin = (): ApolloServerPlugin => ({
  requestDidStart: async (requestContext: any) => {
    const http = requestContext.request?.http;
    if (http) {
      const method = http.method;
      const url = http.url;
      const op = requestContext.request.operationName ?? '-';
      const time = new Date().toISOString();
      console.log(`[DEV] ${time} - ${method} ${url} - operationName: ${op}`);
    }
    return {};
  },
});
/* eslint-enable @typescript-eslint/no-unused-vars */

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: isDev ? [createDevLoggingPlugin()] : [],
});

const { url } = await startStandaloneServer(server, {
  context,
  listen: { port: Number(PORT) },
});

console.log(`🚀 Server ready at: ${url}`);

