class HeaderComponent {
    get getTrelloForFreeButton() { return $('a=Get Trello for free'); }
    get loginButton() { return $('a=Log in'); }

    async clickGetTrelloForFree() {
        await this.getTrelloForFreeButton.waitForDisplayed();
        await this.getTrelloForFreeButton.click();
    }

    async clickLogin() {
        await this.loginButton.waitForDisplayed();
        await this.loginButton.click();
    }

   
}

module.exports = new HeaderComponent();