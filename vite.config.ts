/// <reference types="vitest" />
/// <reference types="vite/client" />
// import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  // off million lint
  plugins: [react(), ViteImageOptimizer()],
  // on million lint
  // plugins: [react(), ViteImageOptimizer(), MillionLint.vite()],
  build: {
    minify: true,

    // uncomment below if your apps is webapp, to make sure it works on old devices and browsers
    // outDir: "dist", // Default output directory
    // assetsDir: "assets", // Ensures assets are grouped properly
    // target: ["es2015", "safari11", "safari12"],
    // rollupOptions: {
    //   output: {
    //     manualChunks: undefined,
    //   },
    // },
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
  preview: {
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
