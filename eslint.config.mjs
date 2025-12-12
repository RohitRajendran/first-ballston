import globals from "globals";
import js from "@eslint/js";
import pluginAstro from "eslint-plugin-astro";
import pluginImport from "eslint-plugin-import";
import pluginSecurity from "eslint-plugin-security";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginTailwind from "eslint-plugin-tailwindcss";
import pluginUnicorn from "eslint-plugin-unicorn";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

const astroRecommended = pluginAstro.configs["flat/recommended"].map((config) => {
  if (!config.files?.some((pattern) => pattern.includes(".astro"))) return config;

  return {
    ...config,
    languageOptions: {
      ...config.languageOptions,
      parserOptions: {
        ...(config.languageOptions?.parserOptions ?? {}),
        parser: tseslint.parser,
      },
      globals: {
        ...(config.languageOptions?.globals ?? {}),
        ...globals.browser,
        ...globals.node,
      },
    },
  };
});

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
  ...astroRecommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      tailwindcss: pluginTailwind,
      import: pluginImport,
      "simple-import-sort": pluginSimpleImportSort,
      unicorn: pluginUnicorn,
      security: pluginSecurity,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginTailwind.configs.recommended.rules,
      ...pluginUnicorn.configs.recommended.rules,
      ...pluginSecurity.configs.recommended.rules,
      // handled by simple-import-sort
      "import/order": "off",
      // auto sort imports/exports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // let ts/astro handle module resolution
      "import/no-unresolved": "off",
      // keep existing component filenames
      "unicorn/filename-case": "off",
      // keep existing DOM query pattern
      "unicorn/prefer-query-selector": "off",
    },
  },
  prettier,
];
