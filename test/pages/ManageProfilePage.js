class ManageProfilePage {
    
    get permissionsOptions() { return $('div[data-test-selector=visibility-wrapper-localtime]'); }
    get permissionsAnyone() { return $('div=Anyone'); }


    async editLocation() {
        await this.permissionsOptions.waitForDisplayed();
        await this.permissionsOptions.click();
        await this.permissionsAnyone.waitForDisplayed();
        await this.permissionsAnyone.click();
    }

    async switchToWindow() {
        await browser.pause(2000);
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
    }

}

module.exports = new ManageProfilePage();
