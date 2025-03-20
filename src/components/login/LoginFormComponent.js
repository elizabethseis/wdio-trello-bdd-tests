class LoginFormComponent {
    get emailInput() { return $('input[type="email"]'); }
    get continueButton() { return $('#login-submit'); }
    get passwordInput() { return $('#password'); }

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

}

module.exports = new LoginFormComponent();
