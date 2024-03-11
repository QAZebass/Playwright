import { test } from '@playwright/test'
import { LoginPage } from '../pages/loginPage';
import { MethodsPage } from '../pages/methodsPage';
import { titles } from '../utils/helpers/dataFixture';


test.describe('Sign Up', async ()=>{

    test('TC1: Validate that the user can register a new account', async ({page, baseURL})=>{
        const registerTitle = titles.signUpTitle
        const loginPage = new LoginPage(page)
        await page.goto(`${baseURL}`)
        await loginPage.assertTitle(registerTitle)
    })
})