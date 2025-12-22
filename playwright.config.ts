import { defineConfig } from "@playwright/test";

const port = process.env.PORT || 4173;
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    command: `npm run dev -- --host 127.0.0.1 --port ${port}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    env: {
      HOME: process.cwd(),
      HOST: "127.0.0.1",
      PORT: String(port),
    },
  },
});
