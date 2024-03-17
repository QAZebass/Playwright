import { Page, Locator } from '@playwright/test'
import { homeLocators } from './Locators/home';
import { basePage } from '../pages/basePage'

export class HomePage extends basePage{

    private logInButton: Locator;

    constructor(page: Page){
        super(page);

        this.logInButton = page.locator(homeLocators.logInButton)
    }

    async clickOnLogIn(){
        await this.logInButton.waitFor({state: 'visible'})
        this.clickOn(homeLocators.logInButton)
    }
}
