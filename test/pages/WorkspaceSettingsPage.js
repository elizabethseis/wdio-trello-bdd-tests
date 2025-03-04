class WorkspaceSettingsPage {
    
    get editIcon() { return $('span[data-testid=EditIcon]'); }
    get workspaceName() { return $('#displayName'); }
    get saveButton() { return $('button[type=submit]'); }
    get workspaceNameLabel() { return $('h2[class="SiP6d2d_8FAAkC"]'); }

    async clickEdit() {
        await this.editIcon.waitForDisplayed();
        await this.editIcon.click();
    }

    async editWorkspaceName(name) {
        await this.workspaceName.waitForDisplayed();
        await this.workspaceName.setValue(name);
    }

    async clickSave() {
        await this.saveButton.waitForDisplayed();
        await this.saveButton.click();
    }

    async getWorkspaceName() {
        await this.workspaceNameLabel.waitForDisplayed();
        return await this.workspaceNameLabel.getText();
    }
}

module.exports = new WorkspaceSettingsPage();