class HomeComponent {

    get createMenuButton() { return $('[data-testid="header-create-menu-button"]'); }
    get createBoardButton() { return $('[data-testid="header-create-board-button"]'); }
    get boardsLink() { return $('[data-testid="open-boards-link"'); }
    

    async clickCreateMenu() {
        await this.createMenuButton.waitForDisplayed();
        await this.createMenuButton.click();
    }

    async clickCreateBoard() {
        await this.createBoardButton.waitForDisplayed();
        await this.createBoardButton.click();
    }

    async clickBoardslink() {
        await this.boardsLink.waitForDisplayed();
        await this.boardsLink.click();
    }

}

module.exports = new HomeComponent();
