import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import type { ApolloServerPlugin } from "@apollo/server";
import { typeDefs } from "../src/graphql/typeDefs/index.js";
import { resolvers } from "../src/graphql/resolvers/index.js";
import { context } from "../src/graphql/context.js";
// @ts-ignore
import { NextRequest } from "next/server";

const isDev = process.env.NODE_ENV !== "production";

const createDevLoggingPlugin = (): ApolloServerPlugin => ({
  requestDidStart: async (requestContext: any) => {
    const url = requestContext.request.http?.url ?? "/api";
    const method = requestContext.request.http?.method ?? "POST";
    const op = requestContext.request.operationName ?? "-";
    const time = new Date().toISOString();

    if (op !== "IntrospectionQuery") {
      console.log(
        `[VERCEL-API] ${time} - ${method} ${url} - operationName: ${op}`,
      );
    }
    return {};
  },
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: isDev ? [createDevLoggingPlugin()] : [],
});

// @ts-ignore - Conflicto de tipos privado 'internals' derivado de la mezcla de ESM/CJS en Apollo Server
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => {
    // En Vercel Functions / Next.js Handler, req es de tipo NextRequest o IncomingMessage
    const baseContext = await context({ req });
    return {
      ...baseContext,
      url: req.url,
    };
  },
});

import { ALLOWED_ORIGIN } from "../src/utils/config.js";

// ... (resto del código igual)

// Wrapper para manejar CORS mejorado
const withCors = (fn: Function) => async (req: NextRequest) => {
  const res = await fn(req);

  res.headers.set("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );

  return res;
};

const corsHandler = withCors(handler);

export const OPTIONS = async (req: NextRequest) => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  });
};

export { corsHandler as GET, corsHandler as POST };
