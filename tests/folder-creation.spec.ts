import { test, expect } from '@playwright/test';
import { DrivePage } from '../pages/drive';
import { faker } from '@faker-js/faker'
import { url } from '../utils/helpers/dataFixture';


test.describe('Folder creation', async ()=>{

    test('Validate that the user can create a new folder with header button', async ({page}) => {
        
        const drive = new DrivePage(page)
        const newFolderName = faker.lorem.word()
        page.goto(url.internxt)
        const pageTitle = page.locator(drive.driveTitle.toString())
        await pageTitle.waitFor({state: "visible"})
        await drive.clickCreateFolderHeaderButton()
        await drive.typeInNewFolderName(newFolderName)
        await drive.clickCreateFolder(newFolderName)
    })
})

