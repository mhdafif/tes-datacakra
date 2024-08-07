/// <reference types="vitest" />
/// <reference types="vite/client" />
// import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // off million lint
  plugins: [react()],
  // on million lint
  // plugins: [react(), MillionLint.vite()],
  build: {
    minify: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 5173,
    host: "0.0.0.0",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/__test__/setup.ts"],
    coverage: {
      provider: "v8",
      enabled: true,
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/utils/**",
        "**/CheckExpiredUVGC/**",
        "**/Autocomplete/**",
        "**/typings/**",
        "**/public/**",
        "**/coverage/**",
        "**/.million/**",
        "**/.vscode/**",
        "**/*.d.ts",
        "**/*.cjs",
      ],
    },
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/utils/**",
      "**/CheckExpiredUVGC/**",
      "**/Autocomplete/**",
      "**/typings/**",
      "**/public/**",
      "**/coverage/**",
      "**/.million/**",
      "**/.vscode/**",
      "**/*.d.ts",
      "**/*.cjs",
    ],
  },
});
