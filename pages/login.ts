import { expect, type Locator, type Page } from "@playwright/test"


export class LoginPage {
    readonly page: Page;
    readonly emailInputLogin: Locator;
    readonly passwordInputLogin: Locator;
    readonly loginButton: Locator
    
    constructor(page: Page){
        this.page = page
        this.emailInputLogin = page.locator('[data-cy="emailInput"]')
        this.passwordInputLogin = page.locator('[data-cy="passwordInput"]')
        this.loginButton = page.locator('[data-cy="loginButton"]')
    }

    async login(email: string, password: string){
        await this.emailInputLogin.fill(email)
        await this.passwordInputLogin.fill(password)
        await this.loginButton.click()
    }
}
