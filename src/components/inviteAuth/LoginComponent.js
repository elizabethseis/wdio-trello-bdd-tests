class LoginComponent {
    get loginButtonInvite() { return $('button[data-testid=login-button]'); }

    async clickLoginInvite() {
        await this.loginButtonInvite.waitForDisplayed();
        await this.loginButtonInvite.click();
    }
    
}

module.exports = new LoginComponent();
