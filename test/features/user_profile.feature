Feature: User Profile Management

  Scenario: Edit User Profile Information
    Given the user is on the "https://trello.com/invite/b/67be40e0beea137631d12ffc/ATTI86805d986a57d12d9a3c5ce4fd2c9c554955CB01/mi-tablero-de-trello" home page
    When the user clicks on login into the invite page
    Then the user should be redirected to "https://id.atlassian.com/login"
    When the user enters a valid email "existing_user"
    When the user clicks the continue button
    When the user enters a valid password "existing_user"
    When the user clicks the continue button
    Then the user should be redirected to "https://trello.com/b/1s2GyOuN/mi-tablero-de-trello"
    When the user clicks on the member menu
    When the user selects Manage account
    When the user switches to the Manage Account window
    Then the user should be redirected to "https://id.atlassian.com/manage-profile/profile-and-visibility"
    Then the user edits their location
