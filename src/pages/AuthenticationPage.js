const LoginFormComponent = require('../components/login/LoginFormComponent');
const LoginComponent = require('../components/inviteAuth/LoginComponent');

class AuthenticationPage {
  constructor() {
    this.loginForm = LoginFormComponent;
    this.loginInvite = LoginComponent;
  }
}

module.exports = new AuthenticationPage();
