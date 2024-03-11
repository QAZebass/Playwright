import { Page, Locator , expect } from "@playwright/test"
import { MethodsPage } from "./methodsPage"
import { LoginLocators } from "./Locators/login"

export class LoginPage extends MethodsPage {

    private emailInput: Locator;
    private passwordInput: Locator;
    private submitButton: Locator;
    private loginErrorMessage: Locator;
    private signUpTitle: Locator;

    construtor(page: Page){
        
        this.emailInput= page.locator(LoginLocators.emailInput)
        this.passwordInput= page.locator(LoginLocators.passwordInput)
        this.submitButton= page.locator(LoginLocators.submitButton)
        this.loginErrorMessage= page.locator(LoginLocators.loginErrorMessage)
        this.signUpTitle = page.locator(LoginLocators.signUpTitle)
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
    async assertTitle(expectedTitle: string){
        await this.page.getByText('Not yet a user? Click here to sign up!').waitFor({timeout: 1000})
        const registerTitle = await this.page.getByText('Not yet a user? Click here to sign up!').textContent()
        await this.assertText(registerTitle, expectedTitle)
    }
}
