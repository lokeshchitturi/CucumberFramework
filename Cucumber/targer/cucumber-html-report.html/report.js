$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/Sample.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Form Testing",
  "description": "",
  "id": "registration-form-testing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4332851407,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login to AutomationPraticse Site",
  "description": "",
  "id": "registration-form-testing;login-to-automationpraticse-site",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "navigate to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicks on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on sigin button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "login is succesfull",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToAutoPraticse_StepDefnition.navigate_to_the_application()"
});
formatter.result({
  "duration": 8609516174,
  "status": "passed"
});
formatter.match({
  "location": "LoginToAutoPraticse_StepDefnition.user_clicks_on_signin_link()"
});
formatter.result({
  "duration": 2478764676,
  "status": "passed"
});
formatter.match({
  "location": "LoginToAutoPraticse_StepDefnition.enter_email_address()"
});
formatter.result({
  "duration": 225187900,
  "status": "passed"
});
formatter.match({
  "location": "LoginToAutoPraticse_StepDefnition.enter_password()"
});
formatter.result({
  "duration": 125139945,
  "status": "passed"
});
formatter.match({
  "location": "LoginToAutoPraticse_StepDefnition.click_on_sigin_button()"
});
formatter.result({
  "duration": 1817624970,
  "status": "passed"
});
formatter.match({
  "location": "LoginToAutoPraticse_StepDefnition.login_is_succesfull()"
});
formatter.result({
  "duration": 107534619,
  "status": "passed"
});
formatter.after({
  "duration": 464889,
  "status": "passed"
});
});