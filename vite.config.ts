/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Manually load env vars
  const env = loadEnv(mode, "", "VITE_ENVIRONMENT");

  return {
    plugins: [react(), ViteImageOptimizer()],
    build: {
      minify: true,
      outDir: "dist", // Default output directory
      assetsDir: "assets", // Ensures assets are grouped properly
      target: ["es2015", "safari11", "safari12"],
      rollupOptions: {
        output: {
          manualChunks: undefined, // Avoids dynamic import issues
        },
      },
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
    esbuild: {
      drop:
        env.VITE_ENVIRONMENT === "production" ? ["console", "debugger"] : [],
    },
  };
});
