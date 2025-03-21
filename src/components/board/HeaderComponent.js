class HeaderComponent {
    get memberMenuButton() { return $('button[data-testid=header-member-menu-button]'); }
    get createMenuButton() { return $('[data-testid="header-create-menu-button"]'); }
    get createBoardButton() { return $('[data-testid="header-create-board-button"]'); }
    get boardsLink() { return $('[data-testid="open-boards-link"'); }
    

    async clickCreateBoard() {
        await this.createBoardButton.waitForDisplayed();
        await this.createBoardButton.click();
    }

    async clickBoardslink() {
        await this.boardsLink.waitForDisplayed();
        await this.boardsLink.click();
    }

    async clickMemberMenu() {
        await this.memberMenuButton.waitForDisplayed();
        await this.memberMenuButton.click();
    }

    async clickCreateMenu() {
        await this.createMenuButton.waitForDisplayed();
        await this.createMenuButton.click();
    }
}

module.exports = new HeaderComponent();
