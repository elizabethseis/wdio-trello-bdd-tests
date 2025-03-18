const { When, Then } = require('@wdio/cucumber-framework');
const { expect} = require('chai');
const BoardManagementPage = require('../pages/BoardManagementPage');
const ListManagementPage = require('../pages/ListManagementPage');
const testData = require('../utils/testData');

let createdListTitle;

When(/^the user clicks on Add a list$/, async () => {
    await BoardManagementPage.board.clickAddList();
});

When(/enters the list name "([^"]*)"$/, async (listKey) => {
    createdListTitle = testData[listKey].title;
    await ListManagementPage.listManagement.enterListName(createdListTitle); 
});

When(/clicks on the Add list button$/, async () => {
    await ListManagementPage.listManagement.clickAddListToBoard(); 
});

Then(/the new list should appear on the board$/, async () => {
    const list = await ListManagementPage.listManagement.listElement(createdListTitle);
    expect(await list.isDisplayed()).to.be.true;
});