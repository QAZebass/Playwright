import { expect, Selectors, type Locator, type Page } from "@playwright/test"


export class LoginPage {
    readonly page: Page;
    readonly wrapper: Locator;
    readonly loginTitle: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator
    
    constructor(page: Page){
        this.page = page
        this.wrapper = page.locator('form')
        this.loginTitle = page.locator('.main-content p').first()
        this.emailInput = page.locator('input#email')
        this.passwordInput = page.locator('input#password]')
        this.submitButton = page.locator('button#submit]')
    }

    async login(email: string, password: string){
        expect(this.loginTitle).toHaveText('Log In')
        await this.emailInput.waitFor({state: 'visible'})
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.submitButton.waitFor()
        await this.submitButton.click()
    }
}
