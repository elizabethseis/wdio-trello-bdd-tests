const { When } = require('@wdio/cucumber-framework');
const AuthenticationPage = require('../pages/AuthenticationPage');
const HomePage = require('../pages/HomePage');
const ManageProfilePage = require('../pages/ManageProfilePage');

When(/^the user clicks on login into the invite page$/, async () => {
    await AuthenticationPage.clickLoginInvite();
});

When(/^the user clicks on the member menu$/, async () => {
    await HomePage.clickMemberMenu();
});

When(/^the user selects Manage account$/, async () => {
    await HomePage.clickManageAccount();
});

When(/^the user switches to the Manage Account window$/, async () => {
    await ManageProfilePage.switchToWindow();
});

When(/^the user edits their location$/, async () => {
    await ManageProfilePage.editLocation();
});
