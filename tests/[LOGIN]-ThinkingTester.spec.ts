import { test } from '@playwright/test';
import { credentials, titles, errorMessage } from '../utils/helpers/dataFixture';
import { LoginPage } from '../pages/loginPage';
import { MethodsPage } from '../pages/methodsPage';
import { ContactListPage } from '../pages/contactListPage';

test.describe('LOGIN - Thinking Tester', async ()=>{
    const email = credentials.email
    const password = credentials.password
    const wrongPass = credentials.invalidPassword
    const contactListText = titles.contactListTitle
    const loginError = errorMessage.loginUnsuccessful
    
    test.only('TC1: Validate that the user can login successfully', async ({page, baseURL}) => {
        
        const loginPage = new LoginPage(page) 
        const contacListPage = new ContactListPage(page)
        const methods = new MethodsPage(page)    
        await methods.loadWeb(`${baseURL}`)
        await loginPage.typeEmail(email)
        await loginPage.typePassword(password)
        await loginPage.clickOnSubmit()
        await contacListPage.titleAssertion(contactListText)
    
    })
    test('TC2: Validate that the user cant login with wrong credentials', async ({ page , baseURL}) =>{

        const loginPage = new LoginPage(page) 
        const methods = new MethodsPage(page) 
        await methods.loadWeb(`${baseURL}`)
        await loginPage.typeEmail(email)
        await loginPage.typePassword(wrongPass)
        await loginPage.clickOnSubmit()
        await loginPage.messageAssertion(loginError)
        
    })
  
})

