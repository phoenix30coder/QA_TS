import BasePage from "@pages/BasePage";
import { expect, Page } from "@playwright/test";
import selectors from "@pages/LoginPage/Selectors";
export default class LoginPage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    /*
        This function type the username to the username input feild
    */
    async typeUsername(username : string){
        await this.setText(username,selectors.usernameFeild);
    }

       /*
        This function type the password to the password input feild
    */
    async typePassword(password : string){
        await this.setText(password,selectors.passwordFeild);
    }

       /*
        This function clicks the log in button
    */
    async clickLoginBtn(){
        await this.clickBtn(selectors.loginBtn);
    }

    async verifyLogin() {
        await this.page.waitForTimeout(2000);
        console.log(this.page.url());
    }
    
}