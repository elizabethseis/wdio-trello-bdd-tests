const AuthenticationComponent = require('../components/AuthenticationComponent');

class AuthenticationPage {
    constructor() {
        this.auth = AuthenticationComponent;
    }
}

module.exports = new AuthenticationPage();
