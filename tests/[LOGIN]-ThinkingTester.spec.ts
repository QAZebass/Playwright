import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { credentials } from '../utils/helpers/dataFixture';


test.describe('LOGIN - Thinking Tester', async ()=>{

    test('TC1: Validate that the user can login successfully', async ({page}) => {
        const email = credentials.email
        const password = credentials.password
        const login = new LoginPage(page)
        
        await page.goto('/')
        login.login(email, password)
    })
})

