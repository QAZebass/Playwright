import { test } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { credentials } from '../utils/helpers/dataFixture'

test.describe('Sign Up', async ()=>{

    test('TC1: Validate that the user can register a new account', async ({page, baseURL})=>{
        const username= credentials.username
        const password= credentials.password
    
        const homepage = new HomePage(page)

        await homepage.loadWeb('/')
        await homepage.clickOnLogIn()
        await page.waitForTimeout(2000)

    })
    
})