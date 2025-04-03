class AboutYouComponent {
    get permissionsOptions() { return $('div[data-test-selector=visibility-wrapper-localtime]'); }
    get permissionsAnyone() { return $('div=Anyone'); }


    async editLocation() {
        await this.permissionsOptions.waitForDisplayed();
        await this.permissionsOptions.click();
        await this.permissionsAnyone.waitForDisplayed();
        await this.permissionsAnyone.click();
    }    
    
}

module.exports = new AboutYouComponent();
