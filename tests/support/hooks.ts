import { BeforeAll, Before, AfterAll } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import config from "../../config/playwright.config";

let browser: Browser;
let page: Page; // ✅ Declare `page` at the global level

BeforeAll(async () => {
  console.log("Launching browser...");
  browser = await chromium.launch({ headless: config.use.headless });
});

Before(async () => {
  if (!browser) {
    throw new Error("Browser instance is not initialized!");
  }
  
  console.log("Opening new page...");
  page = await browser.newPage(); // ✅ Assign `page`
});

AfterAll(async () => {
  console.log("Closing browser...");
  if (browser) await browser.close();
});

export { browser, page }; // ✅ Export `page` so steps can use it

