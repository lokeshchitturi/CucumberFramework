$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/OpenClinic.feature");
formatter.feature({
  "line": 1,
  "name": "Validating functionalities of OpenClinic",
  "description": "",
  "id": "validating-functionalities-of-openclinic",
  "keyword": "Feature"
});
formatter.before({
  "duration": 285778286,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login Validation",
  "description": "",
  "id": "validating-functionalities-of-openclinic;login-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@login"
    },
    {
      "line": 10,
      "name": "@wf"
    },
    {
      "line": 10,
      "name": "@test"
    },
    {
      "line": 10,
      "name": "@sce"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user navigates to application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user verifies the succesful login",
  "keyword": "Then "
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_navigates_to_application()"
});
formatter.result({
  "duration": 9350553956,
  "status": "passed"
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 968970612,
  "status": "passed"
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 1319723680,
  "status": "passed"
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_verifies_the_succesful_login()"
});
formatter.result({
  "duration": 495275992,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 316143673,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 17,
      "value": "# there is no secondary id while adding subject to study via link"
    }
  ],
  "line": 19,
  "name": "Adding a subject to the study via link",
  "description": "",
  "id": "validating-functionalities-of-openclinic;adding-a-subject-to-the-study-via-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user clicked on \"\u003cTabName\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Add subject link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user enters the subject id as \"\u003csubjectID\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters the Person id as \"\u003cpersonID\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user enters the date of enrolment date as \"\u003cenrollmentDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user selects gender as \"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters date of birth as \"\u003cdob\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enters study event as \"\u003cstudyevent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user enters start date as \"\u003cstartdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks add button in Add Subject Form",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user verifies succesful Add subject",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "validating-functionalities-of-openclinic;adding-a-subject-to-the-study-via-link;",
  "rows": [
    {
      "cells": [
        "TabName",
        "subjectID",
        "personID",
        "secondaryID",
        "enrollmentDate",
        "gender",
        "dob",
        "studyevent",
        "startdate"
      ],
      "line": 34,
      "id": "validating-functionalities-of-openclinic;adding-a-subject-to-the-study-via-link;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "35",
        "35",
        "754",
        "02-Feb-2018",
        "Male",
        "22-Apr-1992",
        "Screening",
        "31-Jan-2018"
      ],
      "line": 35,
      "id": "validating-functionalities-of-openclinic;adding-a-subject-to-the-study-via-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7304013,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Adding a subject to the study via link",
  "description": "",
  "id": "validating-functionalities-of-openclinic;adding-a-subject-to-the-study-via-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Add subject link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user enters the subject id as \"35\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters the Person id as \"35\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user enters the date of enrolment date as \"02-Feb-2018\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user selects gender as \"Male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters date of birth as \"22-Apr-1992\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enters study event as \"Screening\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user enters start date as \"31-Jan-2018\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks add button in Add Subject Form",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user verifies succesful Add subject",
  "keyword": "Then "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 409178949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Subject Matrix",
      "offset": 17
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_clicked_on_tab(String)"
});
formatter.result({
  "duration": 1141341584,
  "status": "passed"
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_clicks_on_Add_subject_link()"
});
formatter.result({
  "duration": 100967291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 31
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_enters_the_subject_id_as(String)"
});
formatter.result({
  "duration": 203351028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 30
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_enters_the_Person_id_as(String)"
});
formatter.result({
  "duration": 74006798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02-Feb-2018",
      "offset": 43
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_enters_the_date_of_enrolment_date_as(String)"
});
formatter.result({
  "duration": 157441169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 24
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_selects_gender_as(String)"
});
formatter.result({
  "duration": 130398898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22-Apr-1992",
      "offset": 30
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_enters_date_of_birth_as(String)"
});
formatter.result({
  "duration": 149981155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Screening",
      "offset": 28
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_enters_study_event_as(String)"
});
formatter.result({
  "duration": 119101100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "31-Jan-2018",
      "offset": 27
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_enters_start_date_as(String)"
});
formatter.result({
  "duration": 151040712,
  "status": "passed"
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_clicks_add_button_in_Add_Subject_Form()"
});
formatter.result({
  "duration": 693635455,
  "status": "passed"
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_verifies_succesful_Add_subject()"
});
formatter.result({
  "duration": 52161870,
  "error_message": "java.lang.Exception\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.verifyAddSubject(OC_AddSubject_PageObject.java:218)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_verifies_succesful_Add_subject(OC_Add_Subject_StepDefinition.java:101)\r\n\tat ✽.Then user verifies succesful Add subject(featurefile/OpenClinic.feature:31)\r\n",
  "status": "failed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 519337368,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Searching subject",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-subject",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "user clicked on \"\u003cTabName\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user searches for the subjectID \"\u003cSubjectIDValue\u003e\" in subject matrix table",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user opens the subject ID",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-subject;",
  "rows": [
    {
      "cells": [
        "TabName",
        "SubjectIDValue"
      ],
      "line": 45,
      "id": "validating-functionalities-of-openclinic;searching-subject;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "35"
      ],
      "line": 46,
      "id": "validating-functionalities-of-openclinic;searching-subject;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1845337,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Searching subject",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-subject;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user searches for the subjectID \"35\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user opens the subject ID",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 374593110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Subject Matrix",
      "offset": 17
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_clicked_on_tab(String)"
});
formatter.result({
  "duration": 82683258,
  "error_message": "java.lang.Exception: org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"ListStudySubjects\"\u003e...\u003c/a\u003e is not clickable at point (256, 51). Other element would receive the click: \u003cdiv class\u003d\"blockUI blockOverlay\" style\u003d\"z-index: 1000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 0.6; cursor: wait; position: fixed;\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.clickLinkOnTab(OC_AddSubject_PageObject.java:76)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_clicked_on_tab(OC_Add_Subject_StepDefinition.java:28)\r\n\tat ✽.And user clicked on \"Subject Matrix\" tab(featurefile/OpenClinic.feature:40)\r\nCaused by: org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"ListStudySubjects\"\u003e...\u003c/a\u003e is not clickable at point (256, 51). Other element would receive the click: \u003cdiv class\u003d\"blockUI blockOverlay\" style\u003d\"z-index: 1000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 0.6; cursor: wait; position: fixed;\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.clickLinkOnTab(OC_AddSubject_PageObject.java:70)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_clicked_on_tab(OC_Add_Subject_StepDefinition.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OC_SubjectMatrix_StepDefinition.user_opens_the_subject_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 442069675,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Scheduling the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;scheduling-the-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@wf"
    },
    {
      "line": 48,
      "name": "@sce"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "user clicked on \"\u003cTabName\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user searches for the subjectID \"\u003cSubjectIDValue\u003e\" in subject matrix table",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user schedules the event \"\u003ceventName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user selects the startDate/Time as \"\u003cstartDate\u003e\" \"\u003cstartHour\u003e\" \"\u003cstartMinute\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user selects the endDate/Time as \"\u003cendDate\u003e\" \"\u003cendHour\u003e\" \"\u003cendMinute\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user clicks on proceed to enter data",
  "keyword": "And "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "validating-functionalities-of-openclinic;scheduling-the-event;",
  "rows": [
    {
      "cells": [
        "TabName",
        "SubjectIDValue",
        "eventName",
        "startDate",
        "startHour",
        "startMinute",
        "endDate",
        "endHour",
        "endMinute"
      ],
      "line": 59,
      "id": "validating-functionalities-of-openclinic;scheduling-the-event;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "35",
        "Visit 1",
        "02-Feb-2018",
        "3",
        "5",
        "02-Feb-2018",
        "16",
        "24"
      ],
      "line": 60,
      "id": "validating-functionalities-of-openclinic;scheduling-the-event;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2406671,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Scheduling the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;scheduling-the-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@sce"
    },
    {
      "line": 48,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user searches for the subjectID \"35\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user schedules the event \"Visit 1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user selects the startDate/Time as \"02-Feb-2018\" \"3\" \"5\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user selects the endDate/Time as \"02-Feb-2018\" \"16\" \"24\"",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user clicks on proceed to enter data",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 448540353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Subject Matrix",
      "offset": 17
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_clicked_on_tab(String)"
});
formatter.result({
  "duration": 63412557,
  "error_message": "java.lang.Exception: org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"ListStudySubjects\"\u003e...\u003c/a\u003e is not clickable at point (256, 51). Other element would receive the click: \u003cdiv class\u003d\"blockUI blockOverlay\" style\u003d\"z-index: 1000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 0.6; cursor: wait; position: fixed;\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.clickLinkOnTab(OC_AddSubject_PageObject.java:76)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_clicked_on_tab(OC_Add_Subject_StepDefinition.java:28)\r\n\tat ✽.And user clicked on \"Subject Matrix\" tab(featurefile/OpenClinic.feature:51)\r\nCaused by: org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"ListStudySubjects\"\u003e...\u003c/a\u003e is not clickable at point (256, 51). Other element would receive the click: \u003cdiv class\u003d\"blockUI blockOverlay\" style\u003d\"z-index: 1000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 0.6; cursor: wait; position: fixed;\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.clickLinkOnTab(OC_AddSubject_PageObject.java:70)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_clicked_on_tab(OC_Add_Subject_StepDefinition.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Visit 1",
      "offset": 26
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_schedules_the_event(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "02-Feb-2018",
      "offset": 36
    },
    {
      "val": "3",
      "offset": 50
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_selects_the_startDate_Time_as(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "02-Feb-2018",
      "offset": 34
    },
    {
      "val": "16",
      "offset": 48
    },
    {
      "val": "24",
      "offset": 53
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_selects_the_endDate_Time_as(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OC_SubjectMatrix_StepDefinition.user_clicks_on_proceed_to_enter_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 513680913,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Fill the \"Form\" form for the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "user clicked on \"\u003cTabName\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user searches for the subjectID \"\u003cSubjectIDValue\u003e\" in subject matrix table",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user clicks on Enter Data in the event \"\u003ceventName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user searches for the form \"\u003cformName\u003e\" and opens it",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "user inputs the form field \"\u003cfieldValue1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "user inputs the form field \"\u003cfieldValue2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "user inputs the form field \"\u003cfieldValue3\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "user inputs the form field \"\u003cfieldValue4\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "user inputs the form field \"\u003cfieldValue5\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "user inputs the form field \"\u003cfieldValue6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;",
  "rows": [
    {
      "cells": [
        "TabName",
        "SubjectIDValue",
        "eventName",
        "formName",
        "fieldValue1",
        "fieldValue2",
        "fieldValue3",
        "fieldValue4",
        "fieldValue5",
        "fieldValue6"
      ],
      "line": 78,
      "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "35",
        "Screening",
        "FORM",
        "Name:Lokesh",
        "Age:24",
        "Sex:1",
        "Status:Single",
        "Checked by sign:Present",
        "Checked by date:02-Feb-2018"
      ],
      "line": 79,
      "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;;2"
    },
    {
      "cells": [
        "Subject Matrix",
        "35",
        "Visit 1",
        "FORM",
        "Name:Sai",
        "Age:25",
        "Sex:2",
        "Status:Married",
        "Checked by sign:Present",
        "Checked by date:02-Feb-2018"
      ],
      "line": 80,
      "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4127562,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Fill the \"Form\" form for the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user searches for the subjectID \"35\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user clicks on Enter Data in the event \"Screening\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user searches for the form \"FORM\" and opens it",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "user inputs the form field \"Name:Lokesh\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "user inputs the form field \"Age:24\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "user inputs the form field \"Sex:1\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "user inputs the form field \"Status:Single\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "user inputs the form field \"Checked by sign:Present\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "user inputs the form field \"Checked by date:02-Feb-2018\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 487401756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Subject Matrix",
      "offset": 17
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_clicked_on_tab(String)"
});
formatter.result({
  "duration": 416028739,
  "error_message": "java.lang.Exception: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.clickLinkOnTab(OC_AddSubject_PageObject.java:76)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_clicked_on_tab(OC_Add_Subject_StepDefinition.java:28)\r\n\tat ✽.And user clicked on \"Subject Matrix\" tab(featurefile/OpenClinic.feature:65)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:386)\r\n\tat cucumber.framework.utility.WebDriverUtility.takeScreenshot(WebDriverUtility.java:79)\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.clickLinkOnTab(OC_AddSubject_PageObject.java:72)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_clicked_on_tab(OC_Add_Subject_StepDefinition.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Screening",
      "offset": 40
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_clicks_on_Enter_Data_in_the_event(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FORM",
      "offset": 28
    }
  ],
  "location": "OC_EnterDataForCRGs_StepDefinition.user_searches_for_the_form_and_opens_it(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name:Lokesh",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Age:24",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sex:1",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Status:Single",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checked by sign:Present",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checked by date:02-Feb-2018",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OC_CRFForm_StepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 9297795,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:386)\r\n\tat cucumber.framework.utility.WebDriverUtility.takeScreenshot(WebDriverUtility.java:79)\r\n\tat cucumber.framework.helper.TestBase.after(TestBase.java:62)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 1536447,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Fill the \"Form\" form for the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user searches for the subjectID \"35\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user clicks on Enter Data in the event \"Visit 1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user searches for the form \"FORM\" and opens it",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "user inputs the form field \"Name:Sai\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "user inputs the form field \"Age:25\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "user inputs the form field \"Sex:2\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "user inputs the form field \"Status:Married\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "user inputs the form field \"Checked by sign:Present\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "user inputs the form field \"Checked by date:02-Feb-2018\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 11588465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Subject Matrix",
      "offset": 17
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_clicked_on_tab(String)"
});
formatter.result({
  "duration": 11929354,
  "error_message": "java.lang.Exception: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\n*** Element info: {Using\u003dlink text, value\u003dSubject Matrix}\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.clickLinkOnTab(OC_AddSubject_PageObject.java:76)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_clicked_on_tab(OC_Add_Subject_StepDefinition.java:28)\r\n\tat ✽.And user clicked on \"Subject Matrix\" tab(featurefile/OpenClinic.feature:65)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\n*** Element info: {Using\u003dlink text, value\u003dSubject Matrix}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:465)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.clickLinkOnTab(OC_AddSubject_PageObject.java:70)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_clicked_on_tab(OC_Add_Subject_StepDefinition.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Visit 1",
      "offset": 40
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_clicks_on_Enter_Data_in_the_event(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FORM",
      "offset": 28
    }
  ],
  "location": "OC_EnterDataForCRGs_StepDefinition.user_searches_for_the_form_and_opens_it(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name:Sai",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Age:25",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sex:2",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Status:Married",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checked by sign:Present",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checked by date:02-Feb-2018",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OC_CRFForm_StepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 16632030,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:386)\r\n\tat cucumber.framework.utility.WebDriverUtility.takeScreenshot(WebDriverUtility.java:79)\r\n\tat cucumber.framework.helper.TestBase.after(TestBase.java:62)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 83,
  "name": "Fill the \"DoctorPrescription\" form for the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"doctorprescription\"-form-for-the-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@wf"
    },
    {
      "line": 82,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "user clicked on \"\u003cTabName\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user searches for the subjectID \"\u003cSubjectIDValue\u003e\" in subject matrix table",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user clicks on Enter Data in the event \"\u003ceventName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user searches for the form \"\u003cformName\u003e\" and opens it",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user inputs the form field \"\u003cfieldValue1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "user inputs the form field \"\u003cfieldValue2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "user inputs the form field \"\u003cfieldValue3\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "user inputs the form field \"\u003cfieldValue4\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "user inputs the form field \"\u003cfieldValue5\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "user inputs the form field \"\u003cfieldValue6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "user inputs the form field \"\u003cfieldValue7\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.examples({
  "line": 98,
  "name": "",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"doctorprescription\"-form-for-the-event;",
  "rows": [
    {
      "cells": [
        "TabName",
        "SubjectIDValue",
        "eventName",
        "formName",
        "fieldValue1",
        "fieldValue2",
        "fieldValue3",
        "fieldValue4",
        "fieldValue5",
        "fieldValue6",
        "fieldValue7"
      ],
      "line": 99,
      "id": "validating-functionalities-of-openclinic;fill-the-\"doctorprescription\"-form-for-the-event;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "35",
        "Visit 1",
        "DoctorPrescription",
        "Patient Name:Sai",
        "Patient Age:28",
        "Disease:Fever",
        "Tablets:Chrosine",
        "Checked by sign:Present",
        "Checked by date:02-Feb-2018",
        "Doctor Name:Yuvaraj"
      ],
      "line": 100,
      "id": "validating-functionalities-of-openclinic;fill-the-\"doctorprescription\"-form-for-the-event;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3099116,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Fill the \"DoctorPrescription\" form for the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"doctorprescription\"-form-for-the-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@test"
    },
    {
      "line": 82,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user searches for the subjectID \"35\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user clicks on Enter Data in the event \"Visit 1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user searches for the form \"DoctorPrescription\" and opens it",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user inputs the form field \"Patient Name:Sai\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "user inputs the form field \"Patient Age:28\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "user inputs the form field \"Disease:Fever\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "user inputs the form field \"Tablets:Chrosine\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "user inputs the form field \"Checked by sign:Present\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "user inputs the form field \"Checked by date:02-Feb-2018\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "user inputs the form field \"Doctor Name:Yuvaraj\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 12186244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Subject Matrix",
      "offset": 17
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_clicked_on_tab(String)"
});
formatter.result({
  "duration": 6310233,
  "error_message": "java.lang.Exception: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\n*** Element info: {Using\u003dlink text, value\u003dSubject Matrix}\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.clickLinkOnTab(OC_AddSubject_PageObject.java:76)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_clicked_on_tab(OC_Add_Subject_StepDefinition.java:28)\r\n\tat ✽.And user clicked on \"Subject Matrix\" tab(featurefile/OpenClinic.feature:85)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\n*** Element info: {Using\u003dlink text, value\u003dSubject Matrix}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:465)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat cucumber.framework.PageObject.OC_AddSubject_PageObject.clickLinkOnTab(OC_AddSubject_PageObject.java:70)\r\n\tat com.cucumber.framework.stepDefinitions.OC_Add_Subject_StepDefinition.user_clicked_on_tab(OC_Add_Subject_StepDefinition.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Visit 1",
      "offset": 40
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_clicks_on_Enter_Data_in_the_event(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DoctorPrescription",
      "offset": 28
    }
  ],
  "location": "OC_EnterDataForCRGs_StepDefinition.user_searches_for_the_form_and_opens_it(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Patient Name:Sai",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Patient Age:28",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disease:Fever",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tablets:Chrosine",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checked by sign:Present",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checked by date:02-Feb-2018",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Doctor Name:Yuvaraj",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OC_CRFForm_StepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 10448908,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:386)\r\n\tat cucumber.framework.utility.WebDriverUtility.takeScreenshot(WebDriverUtility.java:79)\r\n\tat cucumber.framework.helper.TestBase.after(TestBase.java:62)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 103,
  "name": "Create and view a dataset",
  "description": "",
  "id": "validating-functionalities-of-openclinic;create-and-view-a-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@login"
    },
    {
      "line": 102,
      "name": "@wf"
    },
    {
      "line": 102,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "user clicks on \"\u003clink\u003e\" in tasks list",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "user clicks on Procced to create dataset link",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "user clicks on Select All items in study link",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "user clicks on Save and define scope button",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "user clicks on Continue button in Define Temporal Scope page",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "user enters Name as \"\u003cName\u003e\" and description as \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "user clicks on Continue button in Specify Dataset Properties page",
  "keyword": "And "
});
formatter.examples({
  "line": 113,
  "name": "",
  "description": "",
  "id": "validating-functionalities-of-openclinic;create-and-view-a-dataset;",
  "rows": [
    {
      "cells": [
        "link",
        "Name",
        "Description"
      ],
      "line": 114,
      "id": "validating-functionalities-of-openclinic;create-and-view-a-dataset;;1"
    },
    {
      "cells": [
        "Create Dataset",
        "ReportOnFeb_3",
        "ReportOnJan31_2"
      ],
      "line": 115,
      "id": "validating-functionalities-of-openclinic;create-and-view-a-dataset;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2035115,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Create and view a dataset",
  "description": "",
  "id": "validating-functionalities-of-openclinic;create-and-view-a-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@login"
    },
    {
      "line": 102,
      "name": "@test"
    },
    {
      "line": 102,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "user clicks on \"Create Dataset\" in tasks list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "user clicks on Procced to create dataset link",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "user clicks on Select All items in study link",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "user clicks on Save and define scope button",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "user clicks on Continue button in Define Temporal Scope page",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "user enters Name as \"ReportOnFeb_3\" and description as \"ReportOnJan31_2\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "user clicks on Continue button in Specify Dataset Properties page",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 23542708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create Dataset",
      "offset": 16
    }
  ],
  "location": "OC_DataSet_StepDefinition.user_clicks_on_in_tasks_list(String)"
});
formatter.result({
  "duration": 66401452,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\n*** Element info: {Using\u003did, value\u003dnav_Tasks_link}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat cucumber.framework.utility.WebDriverUtility.getWebElement(WebDriverUtility.java:98)\r\n\tat cucumber.framework.PageObject.OC_DataSet_PageObject.clickOnTaskLink(OC_DataSet_PageObject.java:143)\r\n\tat cucumber.framework.PageObject.OC_DataSet_PageObject.clickOnTask(OC_DataSet_PageObject.java:154)\r\n\tat com.cucumber.framework.stepDefinitions.OC_DataSet_StepDefinition.user_clicks_on_in_tasks_list(OC_DataSet_StepDefinition.java:13)\r\n\tat ✽.And user clicks on \"Create Dataset\" in tasks list(featurefile/OpenClinic.feature:105)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OC_DataSet_StepDefinition.user_clicks_on_Procced_to_create_dataset_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OC_DataSet_StepDefinition.user_clicks_on_Select_All_items_in_study_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OC_DataSet_StepDefinition.user_clicks_on_Save_and_define_scope_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OC_DataSet_StepDefinition.user_clicks_on_Continue_button_in_Define_Temporal_Scope_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ReportOnFeb_3",
      "offset": 21
    },
    {
      "val": "ReportOnJan31_2",
      "offset": 56
    }
  ],
  "location": "OC_DataSet_StepDefinition.user_enters_Name_as_and_description_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OC_DataSet_StepDefinition.user_clicks_on_Continue_button_in_Specify_Dataset_Properties_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 6372012,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-U77UHNF\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HOME\\AppData\\Local\\Temp\\scoped_dir12244_9519}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ed6cfeaf227e9d5feaade1e6cb357f21\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:698)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:386)\r\n\tat cucumber.framework.utility.WebDriverUtility.takeScreenshot(WebDriverUtility.java:79)\r\n\tat cucumber.framework.helper.TestBase.after(TestBase.java:62)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
});