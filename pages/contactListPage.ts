import { Page, Locator } from "@playwright/test"
import { MethodsPage } from "./methodsPage"
import { ContactListLocator } from "./Locators/contactList"

export class ContactListPage extends MethodsPage {

    private contactListTitle: Locator;
    private signUpTitle: Locator;

    construtor(page: Page){
        
        this.contactListTitle= page.locator(ContactListLocator.contactListTitle)
        this.signUpTitle= page.locator(ContactListLocator.signUpTitle)
    }

    async titleAssertion(expectedTitle: string){
        const title= this.page.locator(ContactListLocator.contactListTitle)
        const textTitle= title.textContent()
        await this.assertText(textTitle, expectedTitle)
    }
}
