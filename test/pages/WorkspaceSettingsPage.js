const workspaceSettingsComponents = require('../components/WorkspaceSettingsComponents');

class WorkspaceSettingsPage {
    
    constructor() {
        this.workspaceSettings = workspaceSettingsComponents;
    }
}

module.exports = new WorkspaceSettingsPage();