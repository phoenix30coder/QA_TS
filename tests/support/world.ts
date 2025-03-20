import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Page } from "playwright";

class CustomWorld extends World {
  page!: Page; // ✅ Ensure `page` is properly defined
}

setWorldConstructor(CustomWorld);
export { CustomWorld };
