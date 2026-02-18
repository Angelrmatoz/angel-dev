import { ApolloServer, HeaderMap } from "@apollo/server";
import { typeDefs } from "../src/graphql/typeDefs/index.js";
import { resolvers } from "../src/graphql/resolvers/index.js";
import { context } from "../src/graphql/context.js";
import { parse as urlParse } from "url";

// Inicializamos el servidor de Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Permitimos introspección para que funcione Apollo Sandbox
});

let serverStarted = false;

export default async function handler(req: any, res: any) {
  // Configuración manual de CORS
  // Esto es necesario para que el frontend pueda conectarse desde otros dominios (Vercel, localhost, etc.)
  const origin = req.headers.origin;

  // Obtenemos los orígenes permitidos desde el env y los convertimos en un array
  const envOrigins = (process.env.ALLOWED_ORIGIN || "")
    .split(",")
    .map((o) => o.trim());

  const allowedOrigins = [
    ...envOrigins,
    "https://studio.apollographql.com",
    "http://localhost:3000",
    "http://localhost:3001",
  ];

  if (allowedOrigins.includes(origin) || !origin) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
  );

  // Si es una petición OPTIONS, respondemos con 200 inmediatamente
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Aseguramos que Apollo Server haya arrancado
  if (!serverStarted) {
    await server.start();
    serverStarted = true;
  }

  // Convertimos los headers de la petición a HeaderMap de Apollo
  const headers = new HeaderMap();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) {
      headers.set(
        key,
        Array.isArray(value) ? value.join(", ") : (value as string),
      );
    }
  }

  // Preparamos la petición para Apollo
  const httpGraphQLRequest = {
    method: req.method?.toUpperCase() || "POST",
    headers,
    search: urlParse(req.url || "").search ?? "",
    body: req.body,
  };

  try {
    // Ejecutamos la petición directamente contra el core de Apollo Server
    // Esto evita depender de integraciones externas como /express4 o /next que pueden fallar por versiones
    const httpGraphQLResponse = await server.executeHTTPGraphQLRequest({
      httpGraphQLRequest,
      context: () => context({ req }),
    });

    // Copiamos los headers de respuesta de Apollo a la respuesta de Vercel
    for (const [key, value] of httpGraphQLResponse.headers) {
      res.setHeader(key, value);
    }

    res.statusCode = httpGraphQLResponse.status || 200;

    // Procesamos el cuerpo de la respuesta
    if (httpGraphQLResponse.body.kind === "complete") {
      res.end(httpGraphQLResponse.body.string);
    } else {
      // Para respuestas en streaming (si las hubiera)
      for await (const chunk of httpGraphQLResponse.body.asyncIterator) {
        res.write(chunk);
      }
      res.end();
    }
  } catch (error: any) {
    console.error("Apollo execution error:", error);
    res.status(500).json({ errors: [{ message: error.message }] });
  }
}
