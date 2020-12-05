$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/LoginDemo.feature");
formatter.feature({
  "name": "Test Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "User is in Login Page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User is navigated to Home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Janielle",
        "12345"
      ]
    },
    {
      "cells": [
        "Joy",
        "12345"
      ]
    },
    {
      "cells": [
        "Reina",
        "12345"
      ]
    },
    {
      "cells": [
        "Mariela",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_in_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Janielle and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_clicks_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_in_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Joy and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_clicks_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_in_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Reina and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_clicks_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_in_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Mariela and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_clicks_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_Home_page()"
});
formatter.result({
  "status": "passed"
});
});