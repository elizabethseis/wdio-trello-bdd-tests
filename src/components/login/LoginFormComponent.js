class LoginFormComponent {
    get emailInput() { return $('input[type="email"]'); }
    get continueButton() { return $('#login-submit'); }
    get passwordInput() { return $('#password'); }
    get signupButton() { return $('#signup-submit'); }

    async enterEmail(email) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);
    }

    async getEmailInputValue() {
        return await this.emailInput.getValue();
    }

    async clickContinue() {
        await this.continueButton.waitForDisplayed();
        await this.continueButton.click();
    }

    async enterPassword(password) {
        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);
    }

    async getPasswordInputValue() {
        return await this.passwordInput.getValue();
    }

    async clickSignup() {
        await this.signupButton.waitForDisplayed();
        await this.signupButton.click();
    }

}

module.exports = new LoginFormComponent();
