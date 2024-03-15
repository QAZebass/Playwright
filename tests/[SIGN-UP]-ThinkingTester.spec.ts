import { test } from '@playwright/test'
import faker from '@faker-js/faker'
import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage';
import { MethodsPage } from '../pages/methodsPage';
import { titles } from '../utils/helpers/dataFixture';



test.describe('Sign Up', async ()=>{

    test('TC1: Validate that the user can register a new account', async ({page, baseURL})=>{
        const signUpTitle = titles.signUpTitle
        const registerTitle= titles.registerTitle
        const loginPage = new LoginPage(page)
        const registerPage = new RegisterPage(page)
        

        await page.goto(`${baseURL}`)
        await loginPage.assertTitle(signUpTitle)
        await loginPage.clickOnSignUp()
        await registerPage.assertSignUpText(registerTitle)
        await registerPage.typeInFirstName('Sebastian')

    })
    
})