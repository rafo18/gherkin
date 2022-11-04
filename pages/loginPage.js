const {I} = inject()

class LoginPage {
    constructor(){
        this.navBar = '#header > div.navbar.navbar-light > div'
        this.inputEmail = "#inputEmail"   // //*[@id='inputEmail']
        this.inputPassword = "#inputPassword"  // //*[@id='inputPassword']
        this.submitButton = '#login'

        this.loginPage = '#main-body > div > div.row > div.col-lg-4.col-xl-3'
        this.capcha = '#recaptcha-anchor > div.recaptcha-checkbox-border'
    }

    visit() {
        I.amOnPage('login')
        // await page.waitForXPath(this.navBar)
        I.waitForElement(this.navBar)
        // const url2 = await this.getUrl()
        I.seeInCurrentUrl("login")
    }

    login(email, password) {

        // await page.waitForSelector(this.inputEmail)
        I.waitForElement(this.inputEmail);

        // await this.type(this.inputEmail, email)
        I.fillField(this.inputEmail , email);

        // await this.type(this.inputPassword, password)
        I.fillField(this.inputPassword, password)

        // await this.click(this.submitButton)
        I.wait(10)
        I.click(this.submitButton)
        I.wait(5)

    }

    validateLogin() {
        // await page.waitForXPath(this.loginPage)
        // I.waitForElement(this.loginPage)
        I.wait(10)
        I.waitForElement(this.loginPage)
      }

}

module.exports = new LoginPage()
module.exports.LoginPage = LoginPage
