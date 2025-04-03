class CreateBoardComponent {

    get boardTitle() { return $('[data-testid="create-board-title-input"]'); }
    get createBoardButton() { return $('[data-testid="create-board-submit-button"]'); }

    async enterBoardTitle(boardTitle) {
        await this.boardTitle.waitForDisplayed();
        await this.boardTitle.setValue(boardTitle);
    }

    async clickCreateBoard() {
        await this.createBoardButton.waitForDisplayed();
        await this.createBoardButton.click();
    }
}

module.exports = new CreateBoardComponent();