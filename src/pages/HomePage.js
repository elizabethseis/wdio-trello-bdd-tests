const homeComponent = require('../components/HomeComponent');
const headerComponent = require('../components/home/HeaderComponent');


class HomePage {
    
    constructor() {
        this.home = homeComponent;
        this.header = headerComponent;
    }
}

module.exports = new HomePage();
