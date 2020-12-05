$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/HooksDemo/HooksDemo.feature");
formatter.feature({
  "name": "Check Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is in the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsForHooks.HookDemoSteps.user_is_in_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepsForHooks.HookDemoSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsForHooks.HookDemoSteps.click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsForHooks.HookDemoSteps.user_is_navigated_to_Home_page()"
});
formatter.result({
  "status": "passed"
});
});