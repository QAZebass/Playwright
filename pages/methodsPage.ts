import { Page } from '@playwright/test'

export class MethodsPage{

    protected readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async loadWeb(url: string){
        await this.page.goto(url)
    }
    async typeIn(selector: string, content: string){
        await this.page.locator(selector).fill(content)
    }
    async clickOn(selector: string){
        await this.page.locator(selector).click()
    }
}