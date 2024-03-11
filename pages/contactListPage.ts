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

    async titleAssertion(title: string){
        const textTitle= await this.page.locator(ContactListLocator.contactListTitle).textContent()
        await this.assertText(textTitle, title)
    }
    async assertSignUpText(expectedTitle: string){
        const title= this.page.locator(ContactListLocator.signUpTitle).textContent()
        await this.assertText(title, expectedTitle)
    }
}
