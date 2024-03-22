import { Page, Locator } from '@playwright/test'
import { homeLocators } from './Locators/home';
import { basePage } from '../pages/basePage'
import { loginLocator } from './Locators/login';

export class HomePage extends basePage{

    private logInButton: Locator;
    private welcomeUserText: Locator

    constructor(page: Page){
        super(page);

        this.logInButton = page.locator(homeLocators.logInButton)
        this.welcomeUserText = page.locator(homeLocators.welcomeUser)
    }

    async clickOnLogIn(){
        await this.logInButton.waitFor({state: 'visible'})
        this.clickOn(homeLocators.logInButton)
    }
    async logInAssertion(user:string){
        await this.welcomeUserText.waitFor()
        const text= await this.welcomeUserText.textContent()
        this.assertText(text, `Welcome ${user}`)
    }
}
