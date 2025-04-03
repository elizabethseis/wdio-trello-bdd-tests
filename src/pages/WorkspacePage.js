const workspaceSettingsComponent = require('../components/board/WorkspaceSettingsComponent');
const WorkspaceMenuComponent = require('../components/board/WorkspaceMenuComponent');

class WorkspacePage {
    
    constructor() {
        this.workspaceSettings = workspaceSettingsComponent;
        this.workspaceMenu = WorkspaceMenuComponent;
    }
}

module.exports = new WorkspacePage();