const { When, Then } = require('@wdio/cucumber-framework');
const BoardManagementPage = require('../pages/BoardManagementPage');
const CardManagmentPage = require('../pages/CardMangementPage');
const testData = require('../utils/testData');
let createdCardTitle;


When(/^the user clicks on Add a card under the list_name list$/, async () => {
    await browser.pause(3000);
    await BoardManagementPage.clickAddCard();
});

When(/enters the card name "([^"]*)" and clicks on the add button$/, async (cardKey) => {
    createdCardTitle = testData[cardKey].title;
    await CardManagmentPage.enterCardName(createdCardTitle);
    await CardManagmentPage.clickaddCardToList(); 
});

Then(/the new card card_name should appear on the board$/, async () => {
    const card = await CardManagmentPage.cardElement(createdCardTitle);
    await card.waitForExist(); 
    await card.waitForDisplayed();   
    await expect(card).toBeDisplayed();
});


