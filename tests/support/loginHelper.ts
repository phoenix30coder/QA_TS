import LoginPage from "@pages/LoginPage/LoginPage";
import { expect, Page } from "@playwright/test";


/**
 * 
 * this is reusable login function code that can be repeatedly called when we want to login to the system
 * 
 * process.env.USER_NAME--> gets the login credentials from the .env file
 */
export async function login(page: Page) {
  if (!page) {
    throw new Error("Page instance is undefined in loginHelper.ts!");
  }
  

  console.log("Navigating to login page...");
  const loginPage = new LoginPage(page);
  
  await loginPage.navigateTo(process.env.LOGIN_PATH);
  console.log(`User name : ${process.env.USER_NAME}`);
  console.log(`Password : ${process.env.PASS_WORD}`);
  await loginPage.typeUsername(process.env.USER_NAME);//process.env.USER_NAME
  await loginPage.typePassword(process.env.PASS_WORD);
  await loginPage.clickLoginBtn();


  /**
   * below code validates the successful login status by checking the current url with the dashboard url
   */
    const currUrl = page.url();
    expect(currUrl).toMatch(process.env.DASHBOARD_PATH);
    console.log(page.url());



  console.log("Login successful!");
}
