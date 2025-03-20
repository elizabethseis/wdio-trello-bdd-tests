const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const BoardManagementPage = require('../pages/BoardManagementPage');
const testData = require('../utils/testData');

let createdBoardTitle;

When(/^the user clicks on the create button$/, async () => {
    await BoardManagementPage.headerBoard.clickCreateMenu();
});

When(/^the user clicks on Create Board$/, async () => {
    await BoardManagementPage.headerBoard.clickCreateBoard();
});

Then(/^enters the board name "([^"]*)"$/, async (boardKey) => {
    createdBoardTitle = testData[boardKey].title;
    await BoardManagementPage.createBoard.enterBoardTitle(createdBoardTitle);
});

When(/^clicks on the create button$/, async () => {
    await BoardManagementPage.createBoard.clickCreateBoard();
});

Then(/^the board should be displayed into the board list$/, async () => {
    await BoardManagementPage.boardList.clickBoardListShow();
    const boardElement = await BoardManagementPage.boardList.boardItem(createdBoardTitle);
    await boardElement.waitForDisplayed({ timeout: 5000 });
    expect(await boardElement.isDisplayed()).to.be.true; 
});

Then(/^the board should be displayed into the search list$/, async () => {
    await browser.pause(3000);
    await BoardManagementPage.headerBoard.clickBoardslink();
    await BoardManagementPage.boardList.enterSearchBoard(createdBoardTitle);
    const isBoardDisplayed = await BoardManagementPage.boardList.isBoardDisplayed(createdBoardTitle);
    expect(isBoardDisplayed).to.be.true;
});


