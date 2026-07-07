import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup",
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "json"], // json-summary가 PR test-report 코멘트 생성에 필요
      reportsDirectory: "./coverage",
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
});
