async function globalSetup(request) {
    const requestContext = await request.newContext();
    await requestContext.post("https://thinking-tester-contact-list.herokuapp.com/users/login", {
    form: {
      "username": "newmail@gmail.com",
      "password": "test123."
    }   
    });
    // Save signed-in state to ‘storageState.json’.
    await requestContext.storageState({ path: "storageState.json" });
    await requestContext.dispose();
  }