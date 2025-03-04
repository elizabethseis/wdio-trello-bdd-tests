const { When, Then } = require('@wdio/cucumber-framework');
const BoardManagementPage = require('../pages/BoardManagementPage');
const ListManagementPage = require('../pages/ListManagementPage');
const testData = require('../utils/testData');

let createdlistTitle;

When(/^the user clicks on Add a list$/, async () => {
    await BoardManagementPage.clickAddList();
});

When(/enters the list name "([^"]*)"  and clicks on the Add list button$/, async (listKey) => {
    createdlistTitle = testData[listKey].title;
    await ListManagementPage.enterListName(createdlistTitle);
    await ListManagementPage.clickAddListToBoard(); 
});

Then(/the new list list_name should appear on the board$/, async () => {
    const list = await ListManagementPage.listElement(createdlistTitle);
    await expect(list).toBeDisplayed();
})

Then(/enters the board name "([^"]*)" and clicks on the create button$/, async (boardKey) => {
    createdBoardTitle = testData[boardKey].title;
    await BoardManagementPage.enterBoardTitle(createdBoardTitle);
    await BoardManagementPage.clickCreateBoard();
});
