#Author: Janielle Joy Gregorio
#Date: December 07, 2020
#Description: Usage of Background
Feature: Check Home Page Functionality

  Background: I am already logged in
    Given I am in the Login page of a test website
    When I enter username and password
    And I click the Login button.
    Then I am navigated to the Home Page

  Scenario: Check the Logout Link
    When I click the Welcome link
    Then logout link is displayed

  Scenario: Verify Quick Launch toolbar is present
    When I click the Dashboard menu
    Then Quick Launch toolbar is displayed
