const boardComponent = require('../components/BoardComponent');
const HeaderBoardComponent = require('../components/board/headerComponent');
const UserMenuComponent = require('../components/board/UserMenuComponent');

class BoardManagementPage {
    
    constructor() { 
        this.board = boardComponent;
        this.headerBoard = HeaderBoardComponent;
        this.userMenu = UserMenuComponent;
    }

}

module.exports = new BoardManagementPage();