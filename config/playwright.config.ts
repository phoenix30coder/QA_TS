import { defineConfig, devices } from '@playwright/test';
// import dotenv from "dotenv"
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import * as dotenv from "dotenv"; // ✅ Fix: Import everything as dotenv
dotenv.config();
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

dotenv.config();

export default defineConfig({
  

  // testDir: './steps/demoblaze-tests',
  // testMatch: ['**/*.ts'],

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  timeout: 60000,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL:  process.env.BASE_URL,
    // baseURL:"https://ts-sit.finsurge.ai",
    headless : process.env.HEADLESS === "true",
    // timeout: 60000, // ⏳ Increase timeout for Playwright actions
    actionTimeout: 15000, // ⏳ Increase timeout for individual actions
    navigationTimeout: 30000,

    // browser : process.env.BROWSER || "chrome",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
  },


});
