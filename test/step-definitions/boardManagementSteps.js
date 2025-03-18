const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomePage = require('../pages/HomePage');
const BoardManagementPage = require('../pages/BoardManagementPage');
const testData = require('../utils/testData');

let createdBoardTitle;

When(/^the user clicks on the create button$/, async () => {
    await HomePage.home.clickCreateMenu();
});

When(/^the user clicks on Create Board$/, async () => {
    await HomePage.home.clickCreateBoard();
});

Then(/^enters the board name "([^"]*)"$/, async (boardKey) => {
    createdBoardTitle = testData[boardKey].title;
    await BoardManagementPage.board.enterBoardTitle(createdBoardTitle);
});

When(/^clicks on the create button$/, async () => {
    await BoardManagementPage.board.clickCreateBoard();
});

Then(/^the board should be displayed into the board list$/, async () => {
    await BoardManagementPage.board.clickBoardListShow();
    const boardElement = await BoardManagementPage.board.boardItem(createdBoardTitle);
    await boardElement.waitForDisplayed({ timeout: 5000 });
    expect(await boardElement.isDisplayed()).to.be.true; 
});

Then(/^the board should be displayed into the search list$/, async () => {
    await browser.pause(3000);
    await HomePage.home.clickBoardslink();
    await BoardManagementPage.board.enterSearchBoard(createdBoardTitle);
    const isBoardDisplayed = await BoardManagementPage.board.isBoardDisplayed(createdBoardTitle);
    expect(isBoardDisplayed).to.be.true;
});


