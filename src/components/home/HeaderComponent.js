class HeaderComponent {
    get getTrelloForFreeButton() { return $('a=Get Trello for free'); }

    async clickGetTrelloForFree() {
        await this.getTrelloForFreeButton.waitForDisplayed();
        await this.getTrelloForFreeButton.click();
    }

   
}

module.exports = new HeaderComponent();