class BoardListComponent {
    get boardListShowButton() { return $('[data-testid="boards-list-show-more-button"]'); }
    get searchBoardInput() { return $('#search'); }
    get addListButton() { return $('[data-testid="list-composer-button"]'); }
    get listAddCardButton() { return $('[data-testid="list-add-card-button"]'); }
    boardElement(boardTitle) { return $(`a[title*="${boardTitle}"]`); }
    boardItem(boardTitle) { return $(`a[aria-label*="${boardTitle}"]`); }
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

    async validateBoardCreated(boardTitle) {
        const board = this.boardItem(boardTitle);
        await board.waitForDisplayed();
        return await board.isDisplayed();
    }

    async clickBoardListShow() {
        await this.boardListShowButton.waitForDisplayed();
        await this.boardListShowButton.click();
    }

    async enterSearchBoard(boardTitle) {
        await this.searchBoardInput.waitForDisplayed();
        await this.searchBoardInput.click();
        await this.searchBoardInput.setValue(boardTitle);
    }

    async isBoardDisplayed(boardTitle) {
        return await this.boardElement(boardTitle).isDisplayed();
    }

    async clickAddList() {
        await this.addListButton.waitForDisplayed();
        await this.addListButton.click();
    }

    async clickAddCard() {
        await this.listAddCardButton.waitForDisplayed();
        await this.listAddCardButton.click();
    }

    
}   

module.exports = new BoardListComponent();