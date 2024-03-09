import { test, expect} from '@playwright/test';
import { credentials } from '../utils/helpers/dataFixture';
import { LoginPage } from '../pages/loginPage';
import { MethodsPage } from '../pages/methodsPage';

test.describe('LOGIN - Thinking Tester', async ()=>{

    test('TC1: Validate that the user can login successfully', async ({page, baseURL}) => {
        
        const loginPage = new LoginPage(page)
        const methods = new MethodsPage(page)
        const email = credentials.email
        const password = credentials.password

        await methods.loadWeb(`${baseURL}`)
        await loginPage.typeEmail(email)
        await loginPage.typePassword(password)
        await loginPage.clickOnSubmit()
    
    })
})

