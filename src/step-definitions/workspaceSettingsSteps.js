const { When, Then } = require('@wdio/cucumber-framework');
const chai = require('chai');
chai.should();
const WorkspacePage = require('../pages/WorkspacePage');
const testData = require('../utils/testData');

When(/^the user clicks on Workspace settings under the workspace menu$/, async () => {
  await WorkspacePage.workspaceMenu.clickworkspaceSettingMenu();
  await WorkspacePage.workspaceMenu.clickworkspaceSettingsDropdown();
});

When(/^the user updates the workspace name to "([^"]*)"$/, async (workspaceKey) => {
  await WorkspacePage.workspaceSettings.clickEdit();
  const workspaceName = testData[workspaceKey].name;
  await WorkspacePage.workspaceSettings.editWorkspaceName(workspaceName);
});

When(/^the user clicks on the save button$/, async () => {
  await WorkspacePage.workspaceSettings.clickSave();
});

Then(/^the "([^"]*)" should be reflected in the workspace details$/, async (workspaceKey) => {
  const expectedWorkspaceName = testData[workspaceKey].name;
  const actualWorkspaceName = await WorkspacePage.workspaceSettings.getWorkspaceName();
  actualWorkspaceName.should.equal(expectedWorkspaceName);
});
