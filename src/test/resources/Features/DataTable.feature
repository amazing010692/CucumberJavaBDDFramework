#Author: Janielle Joy Gregorio
#Date: December 06, 2020
#Description: Verifying Locators from Data Table
Feature: Locators Validation Functionality

  Scenario: Validate the presence of element locators in the Product page
    Given I am in the Home page of an Automation Practice Site
    When I click Selenium Ruby
    Then I will be navigated to the Product page
    And I can verify the presence of element locators
      | element        | xpathValues                               |
      | productName    | "//div[contains(@class,'product_title')]" |
      | submitButton   | "//input[@id='submit']"                   |
      | descriptionTab | "//a[contains(text(),'Description')]"     |
      | reviewsTab     | "//a[contains(text(),'Reviews')]"         |
      | addToBasket    | "//*[contains(@class,'add_to_cart')]"     |