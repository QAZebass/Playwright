import { expect, selectors, type Locator, type Page } from "@playwright/test"
import exp from "constants";


export class DrivePage {
    readonly page: Page;
    readonly driveTitle: String;
    readonly createFolderButtonHeader: Locator;
    //NewFolderName Modal
    readonly newFolderModal: Locator
    readonly modalTitle: Locator
    readonly newNameInput: Locator
    readonly createFolderButton: Locator
    readonly listOfFolders: String

    //readonly folderNameList: Locator
    
    constructor(page: Page){
        this.page = page
        this.createFolderButtonHeader = page.locator('[data-cy="topBarCreateFolderButton"]'),
        this.driveTitle = ('[class="max-w-sm flex-1 cursor-pointer truncate undefined"]')

        //NewFolderName Modal
        this.newFolderModal = page.locator('[class="flex flex-col space-y-5"]')
        this.modalTitle = page.locator('[class="text-2xl font-medium text-gray-100"]')
        this.newNameInput = page.locator('[class="relative"] input')
        this.createFolderButton = page.locator('[type="submit"]')

        //All folder names on the list in Drive
        this.listOfFolders = ('button[data-test="folder-name"] p')
    }

    async clickCreateFolderHeaderButton(){
        await this.createFolderButtonHeader.click()
    }
    async typeInNewFolderName(newName: string){
        const modal = this.newFolderModal
        expect(modal).toBeAttached
        expect(this.modalTitle).toHaveText('New folder')
        expect(this.newNameInput).toBeAttached
        await this.newNameInput.fill(newName)
        expect(this.createFolderButton).toBeEnabled
    }
    async clickCreateFolder(folderName:string){
        await this.createFolderButton.click()
        await this.page.waitForTimeout(3000);
        const folders = await this.page.$$(this.listOfFolders.toString())
        for (let i=0;i<= folders.length -1; i++){
            const names= await folders[i].textContent()
            console.log(names)
            if (names === folderName){
                console.log("The folder has been added!")
                expect(names).toEqual(folderName)
                break;
            }
        }
        
    }
    /* async folderCheck(folderName:string){
        const folders = await this.page.$$(this.listOfFolders.toString())
        for (let i=0;i<= folders.length -1; i++){
            const names= await folders[i].textContent()
            console.log(names)
            if (names === folderName){
                console.log("The folder has been added!")
                expect(names).toEqual(folderName)
                break;
            }
        }
    } */
    
}
