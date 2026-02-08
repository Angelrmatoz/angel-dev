import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Keep build/output/Next ignored to avoid linting generated files
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {},
    },

    rules: {
      // Non-blocking when developing, prefer warnings for unused vars
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // React 17+ with Next.js doesn't require React in scope
      "react/react-in-jsx-scope": "off",
    },

    settings: {
      react: { version: "detect" },
    },

  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: { parserOptions: { project: "./tsconfig.json" } },
  },
]);
