const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai'); 
const BoardManagementPage = require('../pages/BoardManagementPage');
const CardManagmentPage = require('../pages/CardMangementPage');
const testData = require('../utils/testData');
let createdCardTitle;


When(/^the user clicks on Add a card under the list_name list$/, async () => {
    await browser.pause(3000);
    await BoardManagementPage.board.clickAddCard();
});

When(/enters the card name "([^"]*)" and clicks on the add button$/, async (cardKey) => {
    createdCardTitle = testData[cardKey].title;
    await CardManagmentPage.cardManagement.enterCardName(createdCardTitle);
    await CardManagmentPage.cardManagement.clickAddCardToList();
});

Then(/the new card card_name should appear on the board$/, async () => {
    const card = await CardManagmentPage.cardManagement.cardElement(createdCardTitle);
    await card.waitForExist(); 
    await card.waitForDisplayed();   
    expect(await card.isDisplayed()).to.be.true;
});


