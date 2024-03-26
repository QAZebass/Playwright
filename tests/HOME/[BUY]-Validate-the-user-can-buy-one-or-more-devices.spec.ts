import { test, expect} from '@playwright/test'
import { HomePage } from '../../pages/homePage'
import { LoginPage } from '../../pages/loginPage'
import { credentials } from '../../utils/helpers/dataFixture'

test.use({ storageState: 'playwright/.auth/user.json' })

test.describe('[SHOP]Demoblaze', async ()=>{
    
    test('TC1: Validate that the user can send 2 or more products to cart', async ({page})=>{
        
        const homepage = new HomePage(page)
        await homepage.loadWeb('https://www.demoblaze.com/index.html')
        await homepage.logInAssertion(credentials.username)
    })
})