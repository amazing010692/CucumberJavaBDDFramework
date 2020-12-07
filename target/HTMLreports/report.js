$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/LocatorsPF.feature");
formatter.feature({
  "name": "Locators Validation Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check if locators are present in the My Account page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome Browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "I am in the Home page of the Automation Practice Site",
  "keyword": "And "
});
formatter.step({
  "name": "I click the My Account menu",
  "keyword": "When "
});
formatter.step({
  "name": "I enter \u003cemail\u003e and \u003cpassword\u003e in the Registration section",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Register button",
  "keyword": "And "
});
formatter.step({
  "name": "I will be redirected to the Welcome page",
  "keyword": "Then "
});
formatter.step({
  "name": "I can verify the presence of locators",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "test01@gmail.com",
        "1$Pass^08JJ"
      ]
    },
    {
      "cells": [
        "test02@gmail.com",
        "2$Pass^08RM"
      ]
    },
    {
      "cells": [
        "test03@gmail.com",
        "3$Pass^08JJ"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if locators are present in the My Account page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.chrome_Browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am in the Home page of the Automation Practice Site",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_am_in_the_Home_page_of_the_Automation_Practice_Site()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 18.802\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JANIELLE-ACER-N\u0027, ip: \u002710.0.87.151\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\hello\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50843}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: fdf086ae8cf26b06daaa803a794ee09c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat StepDefinitions.LocatorsSteps_PF.i_am_in_the_Home_page_of_the_Automation_Practice_Site(LocatorsSteps_PF.java:35)\r\n\tat ✽.I am in the Home page of the Automation Practice Site(file:///C:/Users/hello/Documents/JAVA_TESTS/CucumberJavaBDDFramework/src/test/resources/Features/LocatorsPF.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click the My Account menu",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_click_the_My_Account_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter test01@gmail.com and 1$Pass^08JJ in the Registration section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.I_enter_username_and_password_in_the_Registration_section(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the Register button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.I_click_the_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will be redirected to the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_will_be_redirected_to_the_Welcome_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can verify the presence of locators",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_can_verify_the_presence_of_locators()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Check if locators are present in the My Account page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.chrome_Browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am in the Home page of the Automation Practice Site",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_am_in_the_Home_page_of_the_Automation_Practice_Site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the My Account menu",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_click_the_My_Account_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter test02@gmail.com and 2$Pass^08RM in the Registration section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.I_enter_username_and_password_in_the_Registration_section(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Register button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.I_click_the_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will be redirected to the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_will_be_redirected_to_the_Welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can verify the presence of locators",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_can_verify_the_presence_of_locators()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Timed out after 30 seconds. Unable to locate the element\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.findElement(AjaxElementLocator.java:99)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat autodemo.AutoResultsPage_PF.verifyLinkDownloads(AutoResultsPage_PF.java:61)\r\n\tat StepDefinitions.LocatorsSteps_PF.i_can_verify_the_presence_of_locators(LocatorsSteps_PF.java:70)\r\n\tat ✽.I can verify the presence of locators(file:///C:/Users/hello/Documents/JAVA_TESTS/CucumberJavaBDDFramework/src/test/resources/Features/LocatorsPF.feature:13)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(), \u0027Downloads\u0027)]/@href\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JANIELLE-ACER-N\u0027, ip: \u002710.0.87.151\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\hello\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50914}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 67ee8b8e69eca716bc5c22eb92aca88b\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(), \u0027Downloads\u0027)]/@href}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.access$001(AjaxElementLocator.java:39)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator$SlowLoadingElement.isLoaded(AjaxElementLocator.java:165)\r\n\tat org.openqa.selenium.support.ui.SlowLoadableComponent.get(SlowLoadableComponent.java:72)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.findElement(AjaxElementLocator.java:95)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat autodemo.AutoResultsPage_PF.verifyLinkDownloads(AutoResultsPage_PF.java:61)\r\n\tat StepDefinitions.LocatorsSteps_PF.i_can_verify_the_presence_of_locators(LocatorsSteps_PF.java:70)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Check if locators are present in the My Account page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.chrome_Browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am in the Home page of the Automation Practice Site",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_am_in_the_Home_page_of_the_Automation_Practice_Site()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 18.990\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JANIELLE-ACER-N\u0027, ip: \u002710.0.87.151\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\hello\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51073}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e5d86ef93e5eda22286f253e14dcfe24\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat StepDefinitions.LocatorsSteps_PF.i_am_in_the_Home_page_of_the_Automation_Practice_Site(LocatorsSteps_PF.java:35)\r\n\tat ✽.I am in the Home page of the Automation Practice Site(file:///C:/Users/hello/Documents/JAVA_TESTS/CucumberJavaBDDFramework/src/test/resources/Features/LocatorsPF.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click the My Account menu",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_click_the_My_Account_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter test03@gmail.com and 3$Pass^08JJ in the Registration section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.I_enter_username_and_password_in_the_Registration_section(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the Register button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.I_click_the_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will be redirected to the Welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_will_be_redirected_to_the_Welcome_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can verify the presence of locators",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LocatorsSteps_PF.i_can_verify_the_presence_of_locators()"
});
formatter.result({
  "status": "skipped"
});
});