import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { credentials } from '../utils/helpers/dataFixture';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  
    await page.goto('/')
    const email = credentials.email
    const password = credentials.password
    const Login = new LoginPage(page)

    Login.login(email, password)
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://drive.internxt.com/');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  const driveTitle = page.locator('[class="max-w-sm flex-1 cursor-pointer truncate undefined"]')
  await expect(driveTitle).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});