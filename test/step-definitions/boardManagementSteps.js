const { When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../pages/HomePage');
const BoardManagementPage = require('../pages/BoardManagementPage');
const testData = require('../utils/testData');
let createdBoardTitle;

When(/^the user clicks on the create button$/, async () => {
    await HomePage.ClickCreateMenu();
});

When(/^selects create board$/, async () => {
    await HomePage.ClickCreateBoard();
});

Then(/^enters the board name "([^"]*)" and clicks on the create button, the board is displayed into the board list$/, async (boardKey) => {
    createdBoardTitle = testData[boardKey].title;
    await BoardManagementPage.enterBoardTitle(createdBoardTitle);
    await BoardManagementPage.clickCreateBoard();
    await BoardManagementPage.clickBoardListShow();
    const boardElement = await BoardManagementPage.boardItem(createdBoardTitle);
    await expect(boardElement).toBeDisplayed();
});

Then(/^enters the board name "([^"]*)" and clicks on the create button, the board is displayed into the search list$/, async (boardKey) => {
    createdBoardTitle = testData[boardKey].title;
    await BoardManagementPage.enterBoardTitle(createdBoardTitle);
    await BoardManagementPage.clickCreateBoard();
    await browser.pause(3000);
    await HomePage.clickBoardslink();
    await BoardManagementPage.enterSearchBoard(createdBoardTitle);
    const isBoardDisplayed = await BoardManagementPage.isBoardDisplayed(createdBoardTitle);
    await expect(isBoardDisplayed).toBe(true);
});
