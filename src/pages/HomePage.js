const headerComponent = require('../components/home/HeaderComponent');

class HomePage {
  constructor() {
    this.header = headerComponent;
  }
}

module.exports = new HomePage();
