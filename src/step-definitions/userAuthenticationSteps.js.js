const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, assert } = require('chai');
const testData = require('../utils/testData');
const HomePage = require('../pages/HomePage');
const AuthenticationPage = require('../pages/AuthenticationPage');

Given(/^the user is on the "([^"]*)" home page$/, async (url) => {
    await browser.url(url);
});

When(/^the user clicks on "Get Trello for free"$/, async () => {
    await HomePage.header.clickGetTrelloForFree();
});

When(/^the user enters a valid email "([^"]*)"$/, async (emailKey) => {
    const email = testData[emailKey].email;
    await AuthenticationPage.loginForm.enterEmail(email);

    const emailValue = await AuthenticationPage.loginForm.getEmailInputValue();
    expect(emailValue).to.equal(email);
});

When(/^the user clicks the signup button$/, async () => {
    await AuthenticationPage.loginForm.clickSignup();
});

When(/^the user clicks the login button$/, async () => {
    await HomePage.header.clickLogin();
});

When(/^the user clicks the continue button$/, async () => {
    await AuthenticationPage.loginForm.clickContinue();
});

When(/^the user enters a valid password "([^"]*)"$/, async (emailKey) => {
    const password = testData[emailKey].password;
    await AuthenticationPage.loginForm.enterPassword(password);

    const passwordValue = await AuthenticationPage.loginForm.getPasswordInputValue();
    expect(passwordValue).to.equal(password);
});

Then(/^the user should be redirected to "([^"]*)"$/, async (expectedUrl) => {
    await browser.waitUntil(
        async () => (await browser.getUrl()).includes(expectedUrl),
        { timeout: 7000, timeoutMsg: `Expected URL: ${expectedUrl}, but got ${await browser.getUrl()}` }
    );

    const currentUrl = await browser.getUrl();
    assert.include(currentUrl, expectedUrl, `URL should include ${expectedUrl}`);
});
