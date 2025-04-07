class WorkspaceMenuComponent {
  get workspaceSettingMenu() {
    return $('[data-testid=admin-settings-dropdown-button]');
  }
  get workspaceSettingsDropdown() {
    return $('[data-testid=popover-settings-button]');
  }

  async clickworkspaceSettingMenu() {
    await this.workspaceSettingMenu.waitForDisplayed();
    await this.workspaceSettingMenu.click();
  }

  async clickworkspaceSettingsDropdown() {
    await this.workspaceSettingsDropdown.waitForDisplayed();
    await this.workspaceSettingsDropdown.click();
  }
}

module.exports = new WorkspaceMenuComponent();
