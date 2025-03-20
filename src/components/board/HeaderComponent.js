class HeaderComponent {
    get memberMenuButton() { return $('button[data-testid=header-member-menu-button]'); }
    

    async clickMemberMenu() {
        await this.memberMenuButton.waitForDisplayed();
        await this.memberMenuButton.click();
    }
}

module.exports = new HeaderComponent();
