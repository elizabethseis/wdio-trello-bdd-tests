const AuthenticationComponent = require('../components/AuthenticationComponent');
const LoginFormComponent = require('../components/login/LoginFormComponent');

class AuthenticationPage {
    constructor() {
        this.auth = AuthenticationComponent;
        this.loginForm = LoginFormComponent;
    }
}

module.exports = new AuthenticationPage();
