import BasePage from "../BasePage"
import { expect, Page } from "@playwright/test";
export default class HomePage extends BasePage{



    constructor(page:Page){
        super(page);
    }
}
