import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    watch: {
      ignored: [
        "**/node_modules/**", // Ignores any file or directory within node_modules
        "**/build/**", // Ignores any file or directory within build
        "**/postgres-data/**", // Ignores any file or directory within postgres-data
      ],
    },
  },
  test: {
    environment: "happy-dom", // Sets the test environment to happy-dom for DOM testing
    globals: true, // Enables global test APIs (e.g., expect, test)
    setupFiles: ["./src/tests/setup-test-environment.ts"], // Specifies setup file for tests
    include: ["./src/**/*.{spec,test}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], // Includes test files
    coverage: {
      reporter: ["text", "json", "html"], // Configures coverage reporters
    },
  },
});
