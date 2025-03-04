const { When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../pages/HomePage');
const WorkspaceSettingsPage = require('../pages/WorkspaceSettingsPage');
const testData = require('../utils/testData');

When(/^the user clicks on Workspace settings under the workspace menu$/, async () => {
    await HomePage.clickworkspaceSettingMenu(); 
    await HomePage.clickworkspaceSettingsDropdown(); 
});

When(/^the user updates the workspace name to "([^"]*)"$/, async (workspaceKey) => {
    await WorkspaceSettingsPage.clickEdit();
    const workspaceName = testData[workspaceKey].name;
    await WorkspaceSettingsPage.editWorkspaceName(workspaceName);
});

When(/^the user clicks on the save button$/, async () => {
    await WorkspaceSettingsPage.clickSave();
});

Then(/^the "([^"]*)" should be reflected in the workspace details$/, async (workspaceKey) => {
    const expectedWorkspaceName = testData[workspaceKey].name;
    const actualWorkspaceName = await WorkspaceSettingsPage.getWorkspaceName();
    expect(expectedWorkspaceName).toBe(actualWorkspaceName);
});
