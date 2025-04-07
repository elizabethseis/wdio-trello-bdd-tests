const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const BoardManagementPage = require('../pages/BoardManagementPage');
const testData = require('../utils/testData');
let createdCardTitle;

When(/^the user clicks on Add a card under the list$/, async () => {
  await browser.pause(3000);
  await BoardManagementPage.boardList.clickAddCard();
});

When(/enters the card name "([^"]*)"$/, async (cardKey) => {
  createdCardTitle = testData[cardKey].title;
  await BoardManagementPage.boardList.enterCardName(createdCardTitle);
});

When(/clicks on the add button$/, async () => {
  await BoardManagementPage.boardList.clickAddCardToList();
});

Then(/the new card should appear on the board$/, async () => {
  const card = await BoardManagementPage.boardList.cardElement(createdCardTitle);
  await card.waitForExist();
  await card.waitForDisplayed();
  expect(await card.isDisplayed()).to.be.true;
});
