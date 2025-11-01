import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    overrides: [
      {
        files: ["tailwind.config.ts"],
        rules: {
          "@typescript-eslint/no-require-imports": "off",
        },
      },
      {
        files: ["**/*.mdx"],
        extends: ["plugin:mdx/recommended"],
        rules: {},
      },
    ],
  },
]);

export default eslintConfig;
