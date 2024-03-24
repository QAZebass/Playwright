import { test } from '@playwright/test'
import { HomePage } from '../../pages/homePage'
import { LoginPage } from '../../pages/loginPage'
import { credentials } from '../../utils/helpers/dataFixture'

test.describe('Log in Test', async ()=>{

    test('TC1: Validate that the user can register a new account', async ({page})=>{
        const username= credentials.username
        const password= credentials.password
    
        const homepage = new HomePage(page)
        const loginpage = new LoginPage(page)

        await homepage.loadWeb('/')
        await homepage.clickOnLogIn()
        await loginpage.typeInUsername(username)
        await loginpage.typeInPassword(password)
        await loginpage.clickLogIn()
        await homepage.logInAssertion(username) 
    })

})