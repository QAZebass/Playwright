import { test } from '@playwright/test'
import { ContactListPage } from '../pages/contactListPage'


test.describe('Contact List Test',()=>{

    test.beforeEach('Logging In', async ({page})=>{
        
        await page.goto('https://thinking-tester-contact-list.herokuapp.com/contactList')
    })

    test('Adding a contact',async ({page})=>{
        const contactListPage = new ContactListPage(page)

        contactListPage.titleAssertion('Contact List')
    })
})