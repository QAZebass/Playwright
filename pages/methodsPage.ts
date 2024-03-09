import { Page, expect } from '@playwright/test'

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
    async assertText(text1: string, text2: string){
        expect(text1).toEqual(text2)
    }
}