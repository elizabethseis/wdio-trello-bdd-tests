class AuthenticationPage {
    get emailInput() { return $('input[type="email"]'); }
    get signupButton() { return $('#signup-submit'); }
    get getTrelloForFreeButton() { return $('a=Get Trello for free'); }
    get loginButton() { return $('a=Log in'); }
    get continueButton() { return $('#login-submit'); }
    get passwordInput() { return $('#password'); }
    get loginButtonInvite() { return $('button[data-testid=login-button]'); }

    async enterEmail(email) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);
    }

    async clickSignup() {
        await this.signupButton.waitForDisplayed();
        await this.signupButton.click();
    }

    async clickGetTrelloForFree() {
        await this.getTrelloForFreeButton.waitForDisplayed();
        await this.getTrelloForFreeButton.click();
    }

    async clickLogin() {
        await this.loginButton.waitForDisplayed();
        await this.loginButton.click();
    }

    async clickLoginInvite() {
        await this.loginButtonInvite.waitForDisplayed();
        await this.loginButtonInvite    .click();
    }

    async clickContinue() {
        await this.continueButton.waitForDisplayed();
        await this.continueButton.click();
    }

    async enterPassword(password) {
        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);
    }
}

module.exports = new AuthenticationPage();
