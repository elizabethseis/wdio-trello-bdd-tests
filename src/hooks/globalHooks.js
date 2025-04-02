const { Before } = require('@wdio/cucumber-framework');

Before(async () => {
    await browser.reloadSession();
    await browser.setWindowSize(1920, 1080); 
    await browser.execute(() => {
        try {
            window.localStorage.clear();
            window.sessionStorage.clear();
        } catch (error) {
            console.warn('Could not clear storage:', error);
        }
    });
    await browser.deleteAllCookies();
});
