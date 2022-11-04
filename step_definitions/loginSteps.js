const { I , loginPage } = inject();

Given('Im in the page', () => {
    loginPage.visit()
});

When("I fill the form with my email and my password", () => {
    loginPage.login("rafaelbarreto10@hotmail.com" , "Rafo251095")
});

Then ('I should see the dashboard page', () => {
    loginPage.validateLogin()
});

When(/^I fill the form with my (.*) and my (.*)$/, (email , password) => {
    loginPage.login(email , password)
});
  
 