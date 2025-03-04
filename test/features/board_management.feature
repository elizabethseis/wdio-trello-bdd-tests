Feature: Board Management

Background:
    Given the user is on the "https://trello.com/invite/b/67be40e0beea137631d12ffc/ATTI86805d986a57d12d9a3c5ce4fd2c9c554955CB01/mi-tablero-de-trello" home page
    When the user clicks on login into the invite page
    Then the user should be redirected to "https://id.atlassian.com/login"
    When the user enters a valid email "existing_user"
    When the user clicks the continue button
    When the user enters a valid password "existing_user"
    When the user clicks the continue button
    Then the user should be redirected to "https://trello.com/b/1s2GyOuN/mi-tablero-de-trello"
    When the user clicks on the create button

  Scenario: Create a new board
    When selects create board
    Then enters the board name "board" and clicks on the create button, the board is displayed into the board list

  Scenario: Search for an existing board
    When selects create board
    Then enters the board name "board" and clicks on the create button, the board is displayed into the search list
