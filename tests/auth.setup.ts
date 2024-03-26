import { test as setup, expect, request } from '@playwright/test';
import { credentials } from '../utils/helpers/dataFixture';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ request }) => {
  
  const response= await request.post('https://api.demoblaze.com/login', {
    data:{
      'username': "Zebax",
      'password': "dGVzdDEyMy4="
  } 
  });
  console.log(response)
  await request.storageState({ path: authFile });
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.

  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  // End of authentication steps.
});