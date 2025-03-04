Feature: User Authentication

  Scenario: Sign Up with a new user account
    Given the user is on the "https://trello.com" home page
    When the user clicks on "Get Trello for free"
    Then the user should be redirected to "https://id.atlassian.com/signup"
    When the user enters a valid email "new_user"
    And the user clicks the signup button
    Then the user should be redirected to "https://id.atlassian.com/signup"

  Scenario: Sign In with existing credentials
    Given the user is on the "https://trello.com" home page
    When the user clicks the login button
    Then the user should be redirected to "https://id.atlassian.com/login"
    When the user enters a valid email "existing_user"
    And the user clicks the continue button
    When the user enters a valid password "existing_user"
    And the user clicks the continue button
    Then the user should be redirected to "https://id.atlassian.com/login"
