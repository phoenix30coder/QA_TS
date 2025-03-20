import { Page, Locator, expect } from "@playwright/test";
import config from "../../config/playwright.config";

export default class BasePage {
    page: Page;
    BASE_URL: string;

    constructor(page: Page) {
        if (!page) {
            throw new Error("Page instance is undefined! Ensure it is passed correctly.");
        }
        this.page = page;
        this.BASE_URL = config.use.baseURL;
    }
    /*this function takes the url as input and navigate to the url*/
    async navigateTo(url: string) {
        await this.page.goto(`${this.BASE_URL}${url}`, { timeout: 60000, waitUntil: "load" });  // 60s timeout
    }

    /*this function gets the test from an element*/
    async getText(locator: string): Promise<string> {
        return (await this.page.locator(locator).textContent()) ?? "";
    }

    /*this function type the text into an input field*/
    async setText(text: string, locator: string) {
        await this.waitForElement(locator);
        await this.page.fill(locator, text);
    }
/*this function clicks a button*/
    async clickBtn(locator: string) {
        await this.waitForElement(locator);
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),  // Wait for navigation
            this.page.click(locator)
        ]);
        // await this.page.locator(locator).click();
        console.log(`Clicked button: ${locator}`);
    }
    
/*this function wait for an element to become visible it will wait until an element gets visible*/
    async waitForElement(locator: string, timeout: number = 10000) {
        try {
            console.log(`Waiting for element: ${locator}`);
            await this.page.waitForSelector(locator, { timeout, state: "visible" });
            console.log(`Element is visible: ${locator}`);
        } catch (error) {
            throw new Error(`Element not found within ${timeout}ms: ${locator}`);
        }
    }
    async isElementPresent(locator: string): Promise<boolean> {
        const element = await this.page.locator(locator);
        return await element.isVisible();
    }
}
