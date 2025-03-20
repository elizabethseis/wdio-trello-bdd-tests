class AuthenticationComponent {
    get signupButton() { return $('#signup-submit'); }
    get loginButton() { return $('a=Log in'); }
    get loginButtonInvite() { return $('button[data-testid=login-button]'); }

    
    async clickSignup() {
        await this.signupButton.waitForDisplayed();
        await this.signupButton.click();
    }

    async clickLogin() {
        await this.loginButton.waitForDisplayed();
        await this.loginButton.click();
    }

    async clickLoginInvite() {
        await this.loginButtonInvite.waitForDisplayed();
        await this.loginButtonInvite.click();
    }
    
}

module.exports = new AuthenticationComponent();
