#Author: Janielle Joy Gregorio
#Date: December 06, 2020
#Description: Usage of Hooks

Feature: Check Login Functionality

  Scenario: Check login is successful with valid credentials
    Given User is in the Login page
    When User enters username and password
    And click the Login button
    Then User is navigated to Home page
