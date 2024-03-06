import { test, expect } from '@playwright/test';
import { credentials } from '../utils/helpers/dataFixture'
import { LoginPage } from '../pages/login'


test('Login Internxt', async ({page}) =>{

    const Login = new LoginPage(page)

    const email = credentials.email
    const password = credentials.password
    await page.goto('/');
    console.log( email, password)
    await Login.login(email, password)

    
    const folderElements = await page.$$('button[data-test="folder-name"] p')
    const folderNames = await Promise.all(folderElements.map(async names =>{
        await names.waitForElementState("visible")
        return await names.textContent()
    }))

    console.log(`These are the names: ${folderNames}`);
    
})
