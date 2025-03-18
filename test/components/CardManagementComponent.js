class CardManagementComponent {
    get inputCardName() { return $('[data-testid="list-card-composer-textarea"]'); }
    get addCardToListButton() { return $('[data-testid="list-card-composer-add-card-button"]'); }
    cardElement(cardTitle) { return $(`a[data-testid="card-name"]=${cardTitle}`); }

    async enterCardName(cardName) {
        await this.inputCardName.waitForDisplayed();
        await this.inputCardName.click();
        await this.inputCardName.setValue(cardName);
    }

    async clickAddCardToList() {
        await this.addCardToListButton.waitForDisplayed();
        await this.addCardToListButton.click();
    }

    async isCardDisplayed(cardTitle) {
        const card = this.cardElement(cardTitle);
        return await card.isExisting() && card.isDisplayed();
    }
}
module.exports = new CardManagementComponent();