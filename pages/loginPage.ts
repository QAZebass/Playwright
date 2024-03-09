import { Page, Locator } from "@playwright/test"
import { MethodsPage } from "./methodsPage"
import { LoginLocators } from "./Locators/login"

export class LoginPage extends MethodsPage {

    private emailInput: Locator;
    private passwordInput: Locator;
    private submitButton: Locator;

    construtor(page: Page){
        
        this.emailInput= page.locator(LoginLocators.emailInput)
        this.passwordInput= page.locator(LoginLocators.passwordInput)
        this.submitButton= page.locator(LoginLocators.submitButton)
    }

    async typeEmail(email:string){
        await this.typeIn(LoginLocators.emailInput, email)
    }
    async typePassword(password:string){
        await this.typeIn(LoginLocators.passwordInput, password)
    }
    async clickOnSubmit(){
        await this.clickOn(LoginLocators.submitButton)
    }
}
