const { When, Then } = require('@wdio/cucumber-framework');
const chai = require('chai');
chai.should(); 
const HomePage = require('../pages/HomePage');
const WorkspaceSettingsPage = require('../pages/WorkspaceSettingsPage');
const testData = require('../utils/testData');

When(/^the user clicks on Workspace settings under the workspace menu$/, async () => {
    await HomePage.home.clickworkspaceSettingMenu(); 
    await HomePage.home.clickworkspaceSettingsDropdown(); 
});

When(/^the user updates the workspace name to "([^"]*)"$/, async (workspaceKey) => {
    await WorkspaceSettingsPage.workspaceSettings.clickEdit();
    const workspaceName = testData[workspaceKey].name;
    await WorkspaceSettingsPage.workspaceSettings.editWorkspaceName(workspaceName);
});

When(/^the user clicks on the save button$/, async () => {
    await WorkspaceSettingsPage.workspaceSettings.clickSave();
});

Then(/^the "([^"]*)" should be reflected in the workspace details$/, async (workspaceKey) => {
    const expectedWorkspaceName = testData[workspaceKey].name;
    const actualWorkspaceName = await WorkspaceSettingsPage.workspaceSettings.getWorkspaceName();
    actualWorkspaceName.should.equal(expectedWorkspaceName);
}); 
