import { test } from '@playwright/test';
import { credentials, contactList } from '../utils/helpers/dataFixture';
import { LoginPage } from '../pages/loginPage';
import { MethodsPage } from '../pages/methodsPage';
import { ContactListPage } from '../pages/contactListPage';

test.describe('LOGIN - Thinking Tester', async ()=>{
    
    
    test('TC1: Validate that the user can login successfully', async ({page, baseURL}) => {
        const email = credentials.email
        const password = credentials.password
        const contactListText = contactList.contactListTitle
        const loginPage = new LoginPage(page)
        const contacListPage = new ContactListPage(page)
        const methods = new MethodsPage(page)    

        await methods.loadWeb(`${baseURL}`)
        await loginPage.typeEmail(email)
        await loginPage.typePassword(password)
        await loginPage.clickOnSubmit()
        await contacListPage.titleAssetion(contactListText)
    
    })
    /* test('TC2: Validate that the user cant log into the app with invalid credentials', async (page)=>{

    }) */
})

