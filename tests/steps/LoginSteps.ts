import { Given, Then } from "@cucumber/cucumber";
import { page } from "../support/hooks"; 
import { login } from "../support/loginHelper";
import { expect } from "@playwright/test";
// import { error } from "console";


/*
  Login test steps starts here
*/
Given("Login with valid details",  {timeout:30000},async function () {
  if (!page) {
    throw new Error("Page instance is undefined! Ensure the browser is launched.");
  }

  console.log("Logging in...");
  await login(page); 
});

