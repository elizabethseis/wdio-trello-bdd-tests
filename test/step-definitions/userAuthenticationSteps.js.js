const { Given, When, Then } = require('@wdio/cucumber-framework');
const testData = require('../utils/testData');
const AuthenticationPage = require('../pages/AuthenticationPage');

Given(/^the user is on the "([^"]*)" home page$/, async (url) => {
    await browser.url(url);
});

When(/^the user clicks on "Get Trello for free"$/, async () => {
    await AuthenticationPage.clickGetTrelloForFree();
});

When(/^the user enters a valid email "([^"]*)"$/, async (emailKey) => {
    const email = testData[emailKey].email;
    await AuthenticationPage.enterEmail(email);
});

When(/^the user clicks the signup button$/, async () => {
    await AuthenticationPage.clickSignup();
});

When(/^the user clicks the login button$/, async () => {
    await AuthenticationPage.clickLogin();
});

When(/^the user clicks the continue button$/, async () => {
    await AuthenticationPage.clickContinue();
});

When(/^the user enters a valid password "([^"]*)"$/, async (emailKey) => {
    const password = testData[emailKey].password;
    await AuthenticationPage.enterPassword(password);
});

Then(/^the user should be redirected to "([^"]*)"$/, async (expectedUrl) => {
    await browser.waitUntil(
        async () => (await browser.getUrl()).includes(expectedUrl),
        { timeout: 7000, timeoutMsg: `Expected URL: ${expectedUrl}, but got ${await browser.getUrl()}` }
    );
});
