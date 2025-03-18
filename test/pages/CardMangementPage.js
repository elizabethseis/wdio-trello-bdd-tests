const cardManagementComponent = require('../components/CardManagementComponent');

class CardManagmentPage {
    constructor() {
        this.cardManagement = cardManagementComponent;
    }
}
module.exports = new CardManagmentPage();