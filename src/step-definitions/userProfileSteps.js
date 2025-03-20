const { When } = require('@wdio/cucumber-framework');
const AuthenticationPage = require('../pages/AuthenticationPage');
const ManageProfilePage = require('../pages/ManageProfilePage');
const BoardManagementPage = require('../pages/BoardManagementPage');

When(/^the user clicks on login into the invite page$/, async () => {
    await AuthenticationPage.loginInvite.clickLoginInvite();
});

When(/^the user clicks on the member menu$/, async () => {
    await BoardManagementPage.headerBoard.clickMemberMenu();
});

When(/^the user selects Manage account$/, async () => {
    await BoardManagementPage.userMenu.clickManageAccount();
});

When(/^the user switches to the Manage Account window$/, async () => {
    await browser.pause(2000);
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
});

When(/^the user edits their location$/, async () => {
    await ManageProfilePage.aboutYou.editLocation();
});
