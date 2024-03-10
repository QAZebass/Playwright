import { Page, Locator , expect } from "@playwright/test"
import { MethodsPage } from "./methodsPage"
import { LoginLocators } from "./Locators/login"

export class LoginPage extends MethodsPage {

    private emailInput: Locator;
    private passwordInput: Locator;
    private submitButton: Locator;
    private loginErrorMessage: Locator;

    construtor(page: Page){
        
        this.emailInput= page.locator(LoginLocators.emailInput)
        this.passwordInput= page.locator(LoginLocators.passwordInput)
        this.submitButton= page.locator(LoginLocators.submitButton)
        this.loginErrorMessage= page.locator(LoginLocators.loginErrorMessage)
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
    async messageAssertion(expectedText: string){
        await this.page.locator(LoginLocators.loginErrorMessage).waitFor({timeout:1000})
        const errorText = await this.page.locator(LoginLocators.loginErrorMessage).textContent()
        await this.assertText(errorText, expectedText)
    }
    
}
