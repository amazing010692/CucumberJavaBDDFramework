$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/DataTable.feature");
formatter.feature({
  "name": "Locators Validation Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the presence of element locators in the Product page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in the Home page of an Automation Practice Site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDataTable.DataTableSteps.i_am_in_the_Home_page_of_an_Automation_Practice_Site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Selenium Ruby",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDataTable.DataTableSteps.i_click_Selenium_Ruby()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will be navigated to the Product page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDataTable.DataTableSteps.i_will_be_navigated_to_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can verify the presence of element locators",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepsDataTable.DataTableSteps.i_can_verify_the_presence_of_element_locators(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression \"//a[contains(text(),\u0027Description\u0027)]\" because of the following error:\nTypeError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The result is not a node set, and therefore cannot be converted to the desired type.\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JANIELLE-ACER-N\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\hello\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56616}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e9debaea45ab56397be53f702ac243a6\n*** Element info: {Using\u003dxpath, value\u003d\"//a[contains(text(),\u0027Description\u0027)]\"}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat StepsDataTable.DataTableSteps.isElementPresent(DataTableSteps.java:29)\r\n\tat StepsDataTable.DataTableSteps.i_can_verify_the_presence_of_element_locators(DataTableSteps.java:79)\r\n\tat ✽.I can verify the presence of element locators(file:///C:/Users/hello/Documents/JAVA_TESTS/CucumberJavaBDDFramework/src/test/resources/Features/DataTable.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});