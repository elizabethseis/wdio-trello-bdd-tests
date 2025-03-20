class HomeComponent {
    
    get memberMenuButton() { return $('button[data-testid=header-member-menu-button]'); }
    get manageAccountButton() { return $('a[data-testid=manage-account-link]'); }
    get workspaceSettingMenu() { return $('[data-testid=admin-settings-dropdown-button]'); }
    get workspaceSettingsDropdown() { return $('[data-testid=popover-settings-button]'); }
    get createMenuButton() { return $('[data-testid="header-create-menu-button"]'); }
    get createBoardButton() { return $('[data-testid="header-create-board-button"]'); }
    get boardsLink() { return $('[data-testid="open-boards-link"'); }
    
    async clickMemberMenu() {
        await this.memberMenuButton.waitForDisplayed();
        await this.memberMenuButton.click();
    }

    async clickManageAccount() {
        await this.manageAccountButton.waitForDisplayed();
        await this.manageAccountButton.click();
    }

    async clickworkspaceSettingMenu() {
        await this.workspaceSettingMenu.waitForDisplayed();
        await this.workspaceSettingMenu.click();
    }

    async clickworkspaceSettingsDropdown() {
        await this.workspaceSettingsDropdown.waitForDisplayed();
        await this.workspaceSettingsDropdown.click();
    }

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
