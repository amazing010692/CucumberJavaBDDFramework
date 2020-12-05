#Author: Janielle Joy Gregorio
#Date: December 05, 2020
#Description: Login Functionality in a Test Demo Website
Feature: Test Login Functionality

  Scenario Outline: Check login is successful with valid credentials
    Given Browser is open
    And User is in Login Page
    When User enters <username> and <password>
    And User clicks the Login button
    Then User is navigated to Home page

    Examples: 
      | username | password |
      | Janielle |    12345 |
      | Joy      |    12345 |
      | Reina    |    12345 |
      | Mariela  |    12345 |
