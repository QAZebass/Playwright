import { Page, Locator , expect } from "@playwright/test"
import { MethodsPage } from "./methodsPage"
import { LoginLocators } from "./Locators/login"

export class LoginPage extends MethodsPage {

    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly submitButton: Locator;
    private readonly loginErrorMessage: Locator;
    private readonly signUpTitle: Locator;
    private readonly signupButton: Locator;

    constructor(page: Page){
        
        super(page);
        this.emailInput= page.locator(LoginLocators.emailInput)
        this.passwordInput= page.locator(LoginLocators.passwordInput)
        this.submitButton= page.locator(LoginLocators.submitButton)
        this.loginErrorMessage= page.locator(LoginLocators.loginErrorMessage)
        this.signUpTitle = page.locator(LoginLocators.signUpTitle)
        this.signupButton= page.locator(LoginLocators.signupButton)
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
    async clickOnSignUp(){
        const button= this.page.locator(LoginLocators.signupButton)
        await button.waitFor({state:'visible'})
        const buttonText= await button.textContent()
        expect(buttonText).toContain('Sign up')
        await this.clickOn(LoginLocators.signupButton)
    }
   
}
