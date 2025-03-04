class ListManagementPage {
    get inputListName() { return $('[data-testid="list-name-textarea"]'); }
    get addListToBoardButton() { return $('[data-testid="list-composer-add-list-button"]'); }
    listElement(listTitle) { return $(`h2[data-testid="list-name"]=${listTitle}`); }

    async enterListName(listName) {
        await this.inputListName.waitForDisplayed();
        await this.inputListName.click();
        await this.inputListName.setValue(listName);
    }
    async clickAddListToBoard() {
        await this.addListToBoardButton.waitForDisplayed();
        await this.addListToBoardButton.click();
    }


}
module.exports = new ListManagementPage();

    