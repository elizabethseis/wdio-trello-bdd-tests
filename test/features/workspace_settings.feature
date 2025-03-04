Feature: Workspace Settings

  Scenario: Edit Workspace settings
    Given the user is on the "https://trello.com/invite/b/67be40e0beea137631d12ffc/ATTI86805d986a57d12d9a3c5ce4fd2c9c554955CB01/mi-tablero-de-trello" home page
    When the user clicks on login into the invite page
    Then the user should be redirected to "https://id.atlassian.com/login"
    When the user enters a valid email "existing_user"
    When the user clicks the continue button
    When the user enters a valid password "existing_user"
    When the user clicks the continue button
    Then the user should be redirected to "https://trello.com/b/1s2GyOuN/mi-tablero-de-trello"
    When the user clicks on Workspace settings under the workspace menu
    Then the user should be redirected to "https://trello.com/w/espaciodetrabajodeuser50314092/account"
    When the user updates the workspace name to "workspace_name"
    When the user clicks on the save button
    Then the "workspace_name" should be reflected in the workspace details
