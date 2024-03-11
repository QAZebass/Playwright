import { Page, Locator } from "@playwright/test"
import { MethodsPage } from "./methodsPage"
import { registerLocator } from "../pages/Locators/register"

export class RegisterPage extends MethodsPage {

    private signUpTitle: Locator;

    construtor(page: Page){
        
        this.signUpTitle= page.locator(registerLocator.signUpTitle)
    }

    async assertSignUpText(expectedTitle: string){
        await this.page.locator(registerLocator.signUpTitle).waitFor({timeout: 1000})
        const title= this.page.locator(registerLocator.signUpTitle)
        const expected= title.textContent()
        console.log(expected)
        await this.assertText(expected, expectedTitle)
    }
}
