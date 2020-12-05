#Author: Janielle Joy Gregorio
#Date: December 05, 2020
#Description: Validate the Presence of Locators in a Test Demo Website
Feature: Locators Validation Functionality

  Scenario Outline: Check if locators are present in the My Account page
    Given Chrome Browser is open
    And I am in the Home page of the Automation Practice Site
    When I click the My Account menu
    And I enter <email> and <password> in the Registration section
    And I click the Register button
    Then I will be redirected to the Welcome page
    And I can verify the presence of locators

    Examples: 
      | email            | password |
      | test01@gmail.com | 1$Pass08 |
      | test02@gmail.com | 2$Pass08 |
      | test03@gmail.com | 3$Pass08 |