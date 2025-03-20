import { Given, Then } from "@cucumber/cucumber";
// import Given
import {Page } from "playwright";
import  HomePage  from "@pages/HomePage/HomePage";
import { expect,test } from "@playwright/test";
import { page } from "../support/hooks";
// let page: Page;
let homePage: HomePage;


Given("open the home page", async function() {

  homePage = new HomePage(page);
  await homePage.navigateTo('/tradelens-gui/#/login');
});
