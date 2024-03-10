import { Page, Locator } from "@playwright/test"
import { MethodsPage } from "./methodsPage"
import { ContactListLocator } from "./Locators/contactList"

export class ContactListPage extends MethodsPage {

    private contactListTitle: Locator;

    construtor(page: Page){
        
        this.contactListTitle= page.locator(ContactListLocator.contactListTitle)
    }

    async titleAssertion(title: string){
        const textTitle= await this.page.locator(ContactListLocator.contactListTitle).textContent()
        await this.assertText(textTitle, title)
    }
}
