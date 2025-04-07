const HeaderBoardComponent = require('../components/board/headerComponent');
const UserMenuComponent = require('../components/board/UserMenuComponent');
const BoardListComponent = require('../components/board/BoardListComponent');
const CreateBoardComponent = require('../components/board/CreateBoardComponent');
class BoardManagementPage {
  constructor() {
    this.headerBoard = HeaderBoardComponent;
    this.userMenu = UserMenuComponent;
    this.boardList = BoardListComponent;
    this.createBoard = CreateBoardComponent;
  }
}

module.exports = new BoardManagementPage();
