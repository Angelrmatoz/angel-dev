import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  // Turbopack se activa vía CLI con el flag --turbopack en Next.js 15+
  // Para silenciar el error de configuración de webpack, simplemente eliminamos la propiedad webpack
};

export default nextConfig;
