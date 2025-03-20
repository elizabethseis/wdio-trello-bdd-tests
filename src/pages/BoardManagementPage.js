const boardComponent = require('../components/BoardComponent');

class BoardManagementPage {
    
    constructor() { 
        this.board = boardComponent;
    }

}

module.exports = new BoardManagementPage();