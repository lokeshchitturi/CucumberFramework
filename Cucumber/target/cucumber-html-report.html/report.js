$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/OpenClinic.feature");
formatter.feature({
  "line": 1,
  "name": "Validating functionalities of OpenClinic",
  "description": "",
  "id": "validating-functionalities-of-openclinic",
  "keyword": "Feature"
});
formatter.before({
  "duration": 315461450,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login Validation",
  "description": "",
  "id": "validating-functionalities-of-openclinic;login-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user navigates to application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters valid username and password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user verifies the succesful login",
  "keyword": "Then "
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_navigates_to_application()"
});
formatter.result({
  "duration": 5911347398,
  "status": "passed"
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 685964775,
  "status": "passed"
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 539775626,
  "status": "passed"
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_verifies_the_succesful_login()"
});
formatter.result({
  "duration": 443666567,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 439918115,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Searching subject",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-subject",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user clicked on \"\u003cTabName\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user searches for the subjectID \"\u003cSubjectIDValue\u003e\" in subject matrix table",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user opens the subject ID",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-subject;",
  "rows": [
    {
      "cells": [
        "TabName",
        "SubjectIDValue"
      ],
      "line": 37,
      "id": "validating-functionalities-of-openclinic;searching-subject;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "1043"
      ],
      "line": 38,
      "id": "validating-functionalities-of-openclinic;searching-subject;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2132892,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Searching subject",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-subject;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user clicked on \"Subject Matrix\" link",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user searches for the subjectID \"1043\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user opens the subject ID",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 396275371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Subject Matrix",
      "offset": 17
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_clicked_on_link(String)"
});
formatter.result({
  "duration": 862181977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1043",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "duration": 755466232,
  "status": "passed"
});
formatter.match({
  "location": "OC_SubjectMatrix_StepDefinition.user_opens_the_subject_ID()"
});
formatter.result({
  "duration": 1032002279,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 63362335,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Searching Notes \u0026 Discrepancies",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-notes-\u0026-discrepancies",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "user clicked on \"\u003cTabName\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user displays the Notes table header fields in console",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user enters Filter \"\u003cfiltername\u003e\" value as \"\u003cfiltervalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user verifies the search result",
  "keyword": "And "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-notes-\u0026-discrepancies;",
  "rows": [
    {
      "cells": [
        "TabName",
        "filtername",
        "filtervalue"
      ],
      "line": 49,
      "id": "validating-functionalities-of-openclinic;searching-notes-\u0026-discrepancies;;1"
    },
    {
      "cells": [
        "Notes \u0026 Discrepancies",
        "Site ID",
        "A"
      ],
      "line": 50,
      "id": "validating-functionalities-of-openclinic;searching-notes-\u0026-discrepancies;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1396892,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Searching Notes \u0026 Discrepancies",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-notes-\u0026-discrepancies;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "user clicked on \"Notes \u0026 Discrepancies\" link",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user displays the Notes table header fields in console",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user enters Filter \"Site ID\" value as \"A\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user verifies the search result",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 488655980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notes \u0026 Discrepancies",
      "offset": 17
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_clicked_on_link(String)"
});
formatter.result({
  "duration": 406746945,
  "status": "passed"
});
formatter.match({
  "location": "OC_NotesAndDiscrepancies_StepDefinition.user_displays_the_Notes_table_header_fields_in_console()"
});
formatter.result({
  "duration": 490940873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Site ID",
      "offset": 20
    },
    {
      "val": "A",
      "offset": 39
    }
  ],
  "location": "OC_NotesAndDiscrepancies_StepDefinition.user_enters_Filter_value_as(String,String)"
});
formatter.result({
  "duration": 216430607,
  "status": "passed"
});
formatter.match({
  "location": "OC_NotesAndDiscrepancies_StepDefinition.user_verifies_the_search_result()"
});
formatter.result({
  "duration": 3173205197,
  "error_message": "java.lang.Exception\r\n\tat cucumber.framework.PageObject.OC_NotesAndDiscrepanices.verifySearchResult(OC_NotesAndDiscrepanices.java:62)\r\n\tat com.cucumber.framework.stepDefinitions.OC_NotesAndDiscrepancies_StepDefinition.user_verifies_the_search_result(OC_NotesAndDiscrepancies_StepDefinition.java:25)\r\n\tat ✽.And user verifies the search result(featurefile/OpenClinic.feature:46)\r\n",
  "status": "failed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 428990985,
  "status": "passed"
});
formatter.before({
  "duration": 1379558,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Closing the browser",
  "description": "",
  "id": "validating-functionalities-of-openclinic;closing-the-browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_closes_the_browser()"
});
formatter.result({
  "duration": 2318440566,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 97171728,
  "status": "passed"
});
});