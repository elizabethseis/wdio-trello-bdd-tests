const { When } = require('@wdio/cucumber-framework');
const AuthenticationPage = require('../pages/AuthenticationPage');
const HomePage = require('../pages/HomePage');
const ManageProfilePage = require('../pages/ManageProfilePage');

When(/^the user clicks on login into the invite page$/, async () => {
    await AuthenticationPage.loginInvite.clickLoginInvite();
});

When(/^the user clicks on the member menu$/, async () => {
    await HomePage.home.clickMemberMenu();
});

When(/^the user selects Manage account$/, async () => {
    await HomePage.home.clickManageAccount();
});

When(/^the user switches to the Manage Account window$/, async () => {
    await ManageProfilePage.manageProfile.switchToWindow();
});

When(/^the user edits their location$/, async () => {
    await ManageProfilePage.manageProfile.editLocation();
});
