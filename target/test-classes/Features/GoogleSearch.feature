#Author: Janielle Joy Gregorio
#Date: December 05, 2020
#Description: Simple Google Search
Feature: Test Google Search Functionality

  Scenario: Validate Google Search is working
    Given Browser is open
    And User is in Google Search page
    When User enters a text in Search box
    And Hits Enter
    Then User is navigated to Search Results
