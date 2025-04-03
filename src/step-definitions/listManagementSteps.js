const { When, Then } = require('@wdio/cucumber-framework');
const { expect} = require('chai');
const BoardManagementPage = require('../pages/BoardManagementPage');
const testData = require('../utils/testData');

let createdListTitle;

When(/^the user clicks on Add a list$/, async () => {
    await browser.pause(3000);
    await BoardManagementPage.boardList.clickAddList();
});

When(/enters the list name "([^"]*)"$/, async (listKey) => {
    createdListTitle = testData[listKey].title;
    await BoardManagementPage.boardList.enterListName(createdListTitle); 
});

When(/clicks on the Add list button$/, async () => {
    await BoardManagementPage.boardList.clickAddListToBoard(); 
});

Then(/the new list should appear on the board$/, async () => {
    const list = await BoardManagementPage.boardList.listElement(createdListTitle);
    expect(await list.isDisplayed()).to.be.true;
});