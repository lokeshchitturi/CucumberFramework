$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/OpenClinic.feature");
formatter.feature({
  "line": 1,
  "name": "Validating functionalities of OpenClinic",
  "description": "",
  "id": "validating-functionalities-of-openclinic",
  "keyword": "Feature"
});
formatter.before({
  "duration": 409323395,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login Validation",
  "description": "",
  "id": "validating-functionalities-of-openclinic;login-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user navigates to application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid username and password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user verifies the succesful login",
  "keyword": "Then "
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_navigates_to_application()"
});
formatter.result({
  "duration": 6898557153,
  "status": "passed"
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 639428692,
  "status": "passed"
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 804228096,
  "status": "passed"
});
formatter.match({
  "location": "OC_Login_StepDefinition.user_verifies_the_succesful_login()"
});
formatter.result({
  "duration": 501734670,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 359585084,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 10,
      "value": "# there is no secondary id while adding subject to study via link"
    }
  ],
  "line": 12,
  "name": "Adding a subject to the study via link",
  "description": "",
  "id": "validating-functionalities-of-openclinic;adding-a-subject-to-the-study-via-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicked on \"\u003cTabName\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks on Add subject link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters the subject id as \"\u003csubjectID\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters the Person id as \"\u003cpersonID\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters the date of enrolment date as \"\u003cenrollmentDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user selects gender as \"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters date of birth as \"\u003cdob\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters study event as \"\u003cstudyevent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters start date as \"\u003cstartdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks add button in Add Subject Form",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user verifies succesful Add subject",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
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
      "line": 27,
      "id": "validating-functionalities-of-openclinic;adding-a-subject-to-the-study-via-link;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "29",
        "29",
        "124",
        "29-Jan-2018",
        "Male",
        "22-Apr-1992",
        "Screening",
        "26-Jan-2018"
      ],
      "line": 28,
      "id": "validating-functionalities-of-openclinic;adding-a-subject-to-the-study-via-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1332003,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Adding a subject to the study via link",
  "description": "",
  "id": "validating-functionalities-of-openclinic;adding-a-subject-to-the-study-via-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks on Add subject link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters the subject id as \"29\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters the Person id as \"29\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters the date of enrolment date as \"29-Jan-2018\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user selects gender as \"Male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters date of birth as \"22-Apr-1992\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters study event as \"Screening\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters start date as \"26-Jan-2018\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks add button in Add Subject Form",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user verifies succesful Add subject",
  "keyword": "Then "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 404685609,
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
  "duration": 405655832,
  "status": "passed"
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_clicks_on_Add_subject_link()"
});
formatter.result({
  "duration": 103909962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 31
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_enters_the_subject_id_as(String)"
});
formatter.result({
  "duration": 118712212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 30
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_enters_the_Person_id_as(String)"
});
formatter.result({
  "duration": 95338392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29-Jan-2018",
      "offset": 43
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_enters_the_date_of_enrolment_date_as(String)"
});
formatter.result({
  "duration": 164871404,
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
  "duration": 167529187,
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
  "duration": 132569569,
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
  "duration": 106264189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26-Jan-2018",
      "offset": 27
    }
  ],
  "location": "OC_Add_Subject_StepDefinition.user_enters_start_date_as(String)"
});
formatter.result({
  "duration": 176435425,
  "status": "passed"
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_clicks_add_button_in_Add_Subject_Form()"
});
formatter.result({
  "duration": 781922279,
  "status": "passed"
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_verifies_succesful_Add_subject()"
});
formatter.result({
  "duration": 498460886,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 59830328,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Searching subject",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-subject",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user clicked on \"\u003cTabName\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user searches for the subjectID \"\u003cSubjectIDValue\u003e\" in subject matrix table",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user opens the subject ID",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-subject;",
  "rows": [
    {
      "cells": [
        "TabName",
        "SubjectIDValue"
      ],
      "line": 38,
      "id": "validating-functionalities-of-openclinic;searching-subject;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "29"
      ],
      "line": 39,
      "id": "validating-functionalities-of-openclinic;searching-subject;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2118670,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Searching subject",
  "description": "",
  "id": "validating-functionalities-of-openclinic;searching-subject;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user searches for the subjectID \"29\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user opens the subject ID",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 414951849,
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
  "duration": 302554315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "duration": 872245106,
  "status": "passed"
});
formatter.match({
  "location": "OC_SubjectMatrix_StepDefinition.user_opens_the_subject_ID()"
});
formatter.result({
  "duration": 2562621000,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 74484577,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Scheduling the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;scheduling-the-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "user clicked on \"\u003cTabName\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user searches for the subjectID \"\u003cSubjectIDValue\u003e\" in subject matrix table",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user schedules the event \"\u003ceventName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user selects the startDate/Time as \"\u003cstartDate\u003e\" \"\u003cstartHour\u003e\" \"\u003cstartMinute\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user selects the endDate/Time as \"\u003cendDate\u003e\" \"\u003cendHour\u003e\" \"\u003cendMinute\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user clicks on proceed to enter data",
  "keyword": "And "
});
formatter.examples({
  "line": 51,
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
      "line": 52,
      "id": "validating-functionalities-of-openclinic;scheduling-the-event;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "29",
        "Visit 1",
        "29-Jan-2018",
        "3",
        "5",
        "29-Jan-2018",
        "16",
        "24"
      ],
      "line": 53,
      "id": "validating-functionalities-of-openclinic;scheduling-the-event;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1281335,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Scheduling the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;scheduling-the-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user searches for the subjectID \"29\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user schedules the event \"Visit 1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user selects the startDate/Time as \"29-Jan-2018\" \"3\" \"5\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user selects the endDate/Time as \"29-Jan-2018\" \"16\" \"24\"",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user clicks on proceed to enter data",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 389085581,
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
  "duration": 223539953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "duration": 626710003,
  "status": "passed"
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
  "duration": 2938324335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29-Jan-2018",
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
  "duration": 490274649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29-Jan-2018",
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
  "duration": 427450093,
  "status": "passed"
});
formatter.match({
  "location": "OC_SubjectMatrix_StepDefinition.user_clicks_on_proceed_to_enter_data()"
});
formatter.result({
  "duration": 322943240,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 65519672,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "Fill the \"Form\" form for the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "user clicked on \"\u003cTabName\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user searches for the subjectID \"\u003cSubjectIDValue\u003e\" in subject matrix table",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user clicks on Enter Data in the event \"\u003ceventName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user searches for the form \"\u003cformName\u003e\" and opens it",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user inputs the form field \"\u003cfieldValue1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user inputs the form field \"\u003cfieldValue2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user inputs the form field \"\u003cfieldValue3\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user inputs the form field \"\u003cfieldValue4\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user inputs the form field \"\u003cfieldValue5\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user inputs the form field \"\u003cfieldValue6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.examples({
  "line": 70,
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
      "line": 71,
      "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "29",
        "Screening",
        "FORM",
        "Name:Lokesh",
        "Age:24",
        "Sex:Male",
        "Status:Single",
        "Checked by sign:Present",
        "Checked by date:29-Jan-2018"
      ],
      "line": 72,
      "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;;2"
    },
    {
      "cells": [
        "Subject Matrix",
        "29",
        "Visit 1",
        "FORM",
        "Name:Sai",
        "Age:25",
        "Sex:Female",
        "Status:Married",
        "Checked by sign:Present",
        "Checked by date:29-Jan-2018"
      ],
      "line": 73,
      "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1201336,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Fill the \"Form\" form for the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user searches for the subjectID \"29\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user clicks on Enter Data in the event \"Screening\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user searches for the form \"FORM\" and opens it",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user inputs the form field \"Name:Lokesh\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user inputs the form field \"Age:24\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user inputs the form field \"Sex:Male\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user inputs the form field \"Status:Single\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user inputs the form field \"Checked by sign:Present\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user inputs the form field \"Checked by date:29-Jan-2018\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 424766088,
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
  "duration": 283394281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "duration": 641858030,
  "status": "passed"
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
  "duration": 2602690849,
  "status": "passed"
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
  "duration": 875958890,
  "status": "passed"
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
  "duration": 131497567,
  "status": "passed"
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
  "duration": 115658427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sex:Male",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "duration": 81334366,
  "status": "passed"
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
  "duration": 115755761,
  "status": "passed"
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
  "duration": 121435327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checked by date:29-Jan-2018",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "duration": 162132733,
  "status": "passed"
});
formatter.match({
  "location": "OC_CRFForm_StepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 467524831,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 56969435,
  "status": "passed"
});
formatter.before({
  "duration": 1030224,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Fill the \"Form\" form for the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"form\"-form-for-the-event;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user searches for the subjectID \"29\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user clicks on Enter Data in the event \"Visit 1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user searches for the form \"FORM\" and opens it",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user inputs the form field \"Name:Sai\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user inputs the form field \"Age:25\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user inputs the form field \"Sex:Female\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user inputs the form field \"Status:Married\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user inputs the form field \"Checked by sign:Present\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user inputs the form field \"Checked by date:29-Jan-2018\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 419322079,
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
  "duration": 260611575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "duration": 675249645,
  "status": "passed"
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
  "duration": 2646607816,
  "status": "passed"
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
  "duration": 434554551,
  "status": "passed"
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
  "duration": 96219282,
  "status": "passed"
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
  "duration": 93764611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sex:Female",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "duration": 71334793,
  "status": "passed"
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
  "duration": 98053952,
  "status": "passed"
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
  "duration": 115479317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checked by date:29-Jan-2018",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "duration": 144396702,
  "status": "passed"
});
formatter.match({
  "location": "OC_CRFForm_StepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 359667306,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 62882334,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 76,
  "name": "Fill the \"DoctorPrescription\" form for the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"doctorprescription\"-form-for-the-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "user clicked on \"\u003cTabName\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "user searches for the subjectID \"\u003cSubjectIDValue\u003e\" in subject matrix table",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "user clicks on Enter Data in the event \"\u003ceventName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "user searches for the form \"\u003cformName\u003e\" and opens it",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "user inputs the form field \"\u003cfieldValue1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "user inputs the form field \"\u003cfieldValue2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "user inputs the form field \"\u003cfieldValue3\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "user inputs the form field \"\u003cfieldValue4\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user inputs the form field \"\u003cfieldValue5\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user inputs the form field \"\u003cfieldValue6\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user inputs the form field \"\u003cfieldValue7\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.examples({
  "line": 91,
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
      "line": 92,
      "id": "validating-functionalities-of-openclinic;fill-the-\"doctorprescription\"-form-for-the-event;;1"
    },
    {
      "cells": [
        "Subject Matrix",
        "29",
        "Visit 1",
        "DoctorPrescription",
        "Patient Name:Sai",
        "Patient Age:28",
        "Disease:Fever",
        "Tablets:Chrosine",
        "Checked by sign:Present",
        "Checked by date:29-Jan-2018",
        "Doctor Name:Yuvaraj"
      ],
      "line": 93,
      "id": "validating-functionalities-of-openclinic;fill-the-\"doctorprescription\"-form-for-the-event;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 858223,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Fill the \"DoctorPrescription\" form for the event",
  "description": "",
  "id": "validating-functionalities-of-openclinic;fill-the-\"doctorprescription\"-form-for-the-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "user clicked on \"Subject Matrix\" tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "user searches for the subjectID \"29\" in subject matrix table",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "user clicks on Enter Data in the event \"Visit 1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "user searches for the form \"DoctorPrescription\" and opens it",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "user inputs the form field \"Patient Name:Sai\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "user inputs the form field \"Patient Age:28\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "user inputs the form field \"Disease:Fever\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "user inputs the form field \"Tablets:Chrosine\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user inputs the form field \"Checked by sign:Present\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user inputs the form field \"Checked by date:29-Jan-2018\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user inputs the form field \"Doctor Name:Yuvaraj\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 383530015,
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
  "duration": 238834646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 33
    }
  ],
  "location": "OC_SubjectMatrix_StepDefinition.user_searches_for_the_subjectID_in_subject_matrix_table(String)"
});
formatter.result({
  "duration": 592023275,
  "status": "passed"
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
  "duration": 2665852740,
  "status": "passed"
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
  "duration": 451463914,
  "status": "passed"
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
  "duration": 91997052,
  "status": "passed"
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
  "duration": 97317506,
  "status": "passed"
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
  "duration": 115869539,
  "status": "passed"
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
  "duration": 567113,
  "status": "passed"
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
  "duration": 98321508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checked by date:29-Jan-2018",
      "offset": 28
    }
  ],
  "location": "OC_CRFForm_StepDefinition.user_inputs_the_form_field(String)"
});
formatter.result({
  "duration": 157572724,
  "status": "passed"
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
  "duration": 114066869,
  "status": "passed"
});
formatter.match({
  "location": "OC_CRFForm_StepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 436418109,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 71977461,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 96,
  "name": "Create and view a dataset",
  "description": "",
  "id": "validating-functionalities-of-openclinic;create-and-view-a-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@login"
    },
    {
      "line": 95,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "user clicks on \"\u003clink\u003e\" in tasks list",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "user clicks on Procced to create dataset link",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "user clicks on Select All items in study link",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "user clicks on Save and define scope button",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "user clicks on Continue button in Define Temporal Scope page",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "user enters Name as \"\u003cName\u003e\" and description as \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "user clicks on Continue button in Specify Dataset Properties page",
  "keyword": "And "
});
formatter.examples({
  "line": 106,
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
      "line": 107,
      "id": "validating-functionalities-of-openclinic;create-and-view-a-dataset;;1"
    },
    {
      "cells": [
        "Create Dataset",
        "ReportOnJan29",
        "ReportOnJan29"
      ],
      "line": 108,
      "id": "validating-functionalities-of-openclinic;create-and-view-a-dataset;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1213335,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "Create and view a dataset",
  "description": "",
  "id": "validating-functionalities-of-openclinic;create-and-view-a-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@login"
    },
    {
      "line": 95,
      "name": "@wf"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "user logged into application",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "user clicks on \"Create Dataset\" in tasks list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "user clicks on Procced to create dataset link",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "user clicks on Select All items in study link",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "user clicks on Save and define scope button",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "user clicks on Continue button in Define Temporal Scope page",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "user enters Name as \"ReportOnJan29\" and description as \"ReportOnJan29\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "user clicks on Continue button in Specify Dataset Properties page",
  "keyword": "And "
});
formatter.match({
  "location": "OC_Add_Subject_StepDefinition.user_logged_into_application()"
});
formatter.result({
  "duration": 459443039,
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
  "duration": 423017197,
  "status": "passed"
});
formatter.match({
  "location": "OC_DataSet_StepDefinition.user_clicks_on_Procced_to_create_dataset_link()"
});
formatter.result({
  "duration": 248729331,
  "status": "passed"
});
formatter.match({
  "location": "OC_DataSet_StepDefinition.user_clicks_on_Select_All_items_in_study_link()"
});
formatter.result({
  "duration": 99941511,
  "status": "passed"
});
formatter.match({
  "location": "OC_DataSet_StepDefinition.user_clicks_on_Save_and_define_scope_button()"
});
formatter.result({
  "duration": 517992920,
  "status": "passed"
});
formatter.match({
  "location": "OC_DataSet_StepDefinition.user_clicks_on_Continue_button_in_Define_Temporal_Scope_page()"
});
formatter.result({
  "duration": 152211382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ReportOnJan29",
      "offset": 21
    },
    {
      "val": "ReportOnJan29",
      "offset": 56
    }
  ],
  "location": "OC_DataSet_StepDefinition.user_enters_Name_as_and_description_as(String,String)"
});
formatter.result({
  "duration": 190543450,
  "status": "passed"
});
formatter.match({
  "location": "OC_DataSet_StepDefinition.user_clicks_on_Continue_button_in_Specify_Dataset_Properties_page()"
});
formatter.result({
  "duration": 1319998347,
  "status": "passed"
});
formatter.write("Finished scenario");
formatter.after({
  "duration": 130474010,
  "status": "passed"
});
});