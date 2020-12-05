#Author: Janielle Joy Gregorio
#Date: December 05, 2020
#Description: Just a sample feature for demo purposes
@SmokeFeature
Feature: Test Login Functionality

  @smokeTest
  Scenario: Check login is successful with login credentials
    Given User is in the Login page
    When User enters username and password
    And click the Login button
    Then User is navigated to Home page
