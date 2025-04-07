class UserMenuComponent {
  get manageAccountButton() {
    return $('a[data-testid=manage-account-link]');
  }

  async clickManageAccount() {
    await this.manageAccountButton.waitForDisplayed();
    await this.manageAccountButton.click();
  }
}

module.exports = new UserMenuComponent();
