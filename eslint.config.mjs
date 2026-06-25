import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // MDX는 Next 빌드에서는 @next/mdx가 처리하고,
    // ESLint 9 flat config에서는 별도 MDX parser/processor 없이는 파싱 에러가 나므로 제외
    "markdown/**/*.mdx",
  ]),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // 배포 복구 우선: any 사용은 일단 경고로 낮춤
      "@typescript-eslint/no-explicit-any": "warn",

      // 사용하지 않는 변수도 일단 경고 유지
      "@typescript-eslint/no-unused-vars": "warn",

      // 기존 코드에서 React.createElement에 children props를 넘기는 부분이 있어 경고로 낮춤
      "react/no-children-prop": "warn",
    },
  },

  {
    files: ["tailwind.config.ts"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]);

export default eslintConfig;
