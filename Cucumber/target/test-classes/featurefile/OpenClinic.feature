Feature: Validating functionalities of OpenClinic


@heee
Scenario: Testing the sample
Given hello world
And Sample test


  @login @wf @test @sce
  Scenario: Login Validation
    Given user navigates to application
    When user enters valid username and password
    And user clicks on login
    Then user verifies the succesful login

  # there is no secondary id while adding subject to study via link
  @wf
  Scenario Outline: Adding a subject to the study via link
    Given user logged into application
    And user clicked on "<TabName>" tab
    And user clicks on Add subject link
    And user enters the subject id as "<subjectID>"
    And user enters the Person id as "<personID>"
    And user enters the date of enrolment date as "<enrollmentDate>"
    And user selects gender as "<gender>"
    And user enters date of birth as "<dob>"
    And user enters study event as "<studyevent>"
    And user enters start date as "<startdate>"
    And user clicks add button in Add Subject Form
    Then user verifies succesful Add subject

    Examples: 
      | TabName        | subjectID | personID | secondaryID | enrollmentDate | gender | dob         | studyevent | startdate   |
      | Subject Matrix |        35 |       35 |         754 | 02-Feb-2018    | Male   | 22-Apr-1992 | Screening  | 31-Jan-2018 |

  @wf
  Scenario Outline: Searching subject
    Given user logged into application
    And user clicked on "<TabName>" tab
    And user searches for the subjectID "<SubjectIDValue>" in subject matrix table
    And user opens the subject ID

    Examples: 
      | TabName        | SubjectIDValue |
      | Subject Matrix |             35 |

  @wf @sce
  Scenario Outline: Scheduling the event
    Given user logged into application
    And user clicked on "<TabName>" tab
    And user searches for the subjectID "<SubjectIDValue>" in subject matrix table
    And user schedules the event "<eventName>"
    And user selects the startDate/Time as "<startDate>" "<startHour>" "<startMinute>"
    And user selects the endDate/Time as "<endDate>" "<endHour>" "<endMinute>"
    And user clicks on proceed to enter data

    Examples: 
      | TabName        | SubjectIDValue | eventName | startDate   | startHour | startMinute | endDate     | endHour | endMinute |
      | Subject Matrix |             35 | Visit 1   | 02-Feb-2018 |         3 |           5 | 02-Feb-2018 |      16 |        24 |

  @wf
  Scenario Outline: Fill the "Form" form for the event
    Given user logged into application
    And user clicked on "<TabName>" tab
    And user searches for the subjectID "<SubjectIDValue>" in subject matrix table
    And user clicks on Enter Data in the event "<eventName>"
    And user searches for the form "<formName>" and opens it
    And user inputs the form field "<fieldValue1>"
    And user inputs the form field "<fieldValue2>"
    And user inputs the form field "<fieldValue3>"
    And user inputs the form field "<fieldValue4>"
    And user inputs the form field "<fieldValue5>"
    And user inputs the form field "<fieldValue6>"
    And user clicks on Save button

    Examples: 
      | TabName        | SubjectIDValue | eventName | formName | fieldValue1 | fieldValue2 | fieldValue3 | fieldValue4    | fieldValue5             | fieldValue6                 |
      | Subject Matrix |             35 | Screening | FORM     | Name:Lokesh | Age:24      | Sex:1    | Status:Single  | Checked by sign:Present | Checked by date:02-Feb-2018 |
      | Subject Matrix |             35 | Visit 1   | FORM     | Name:Sai    | Age:25      | Sex:2  | Status:Married | Checked by sign:Present | Checked by date:02-Feb-2018 |

  @wf @test
  Scenario Outline: Fill the "DoctorPrescription" form for the event
    Given user logged into application
    And user clicked on "<TabName>" tab
    And user searches for the subjectID "<SubjectIDValue>" in subject matrix table
    And user clicks on Enter Data in the event "<eventName>"
    And user searches for the form "<formName>" and opens it
    And user inputs the form field "<fieldValue1>"
    And user inputs the form field "<fieldValue2>"
    And user inputs the form field "<fieldValue3>"
    And user inputs the form field "<fieldValue4>"
    And user inputs the form field "<fieldValue5>"
    And user inputs the form field "<fieldValue6>"
    And user inputs the form field "<fieldValue7>"
    And user clicks on Save button

    Examples: 
      | TabName        | SubjectIDValue | eventName | formName           | fieldValue1      | fieldValue2    | fieldValue3   | fieldValue4      | fieldValue5             | fieldValue6                 | fieldValue7         |
      | Subject Matrix |             35 | Visit 1   | DoctorPrescription | Patient Name:Sai | Patient Age:28 | Disease:Fever | Tablets:Chrosine | Checked by sign:Present | Checked by date:02-Feb-2018 | Doctor Name:Yuvaraj |

  @login @wf @test
  Scenario Outline: Create and view a dataset
    Given user logged into application
    And user clicks on "<link>" in tasks list
    And user clicks on Procced to create dataset link
    And user clicks on Select All items in study link
    And user clicks on Save and define scope button
    And user clicks on Continue button in Define Temporal Scope page
    And user enters Name as "<Name>" and description as "<Description>"
    And user clicks on Continue button in Specify Dataset Properties page

    Examples: 
      | link           | Name          | Description   |
      | Create Dataset | ReportOnFeb_3 | ReportOnJan31_2 |

  Scenario Outline: Adding a subject to the study via tab
    Given user logged into application
    And user clicked on "<TabName>" tab
    And user enters the subject id as "<subjectID>"
    And user enters the Person id as "<personID>"
    And user enters the Secondary id as "<secondaryID>"
    And user enters the date of enrolment date as "<enrollmentDate>"
    And user selects gender as "<gender>"
    And user enters date of birth as "<dob>"
    And user clicks on save and finish button
    Then user verifies succesful Add subject

    Examples: 
      | TabName     | subjectID | personID | secondaryID | enrollmentDate | gender | dob         |
      | Add Subject |        45 |     3145 |         342 | 20-Jan-2018    | Male   | 22-Apr-1992 |

  Scenario Outline: Fill the Form
    Given user opens the form "<formName>" for the event "<eventName>"
    And user inputs the form field "<fieldValue1>"
    And user clicks on Save button

    #And user clicks on Exit button
    Examples: 
      | formName           | eventName | fieldValue1   |
      | DoctorPrescription | Visit 1   | Disease:Fever |

  Scenario Outline: Searching Notes & Discrepancies
    Given user logged into application
    And user clicked on "<TabName>" tab
    And user displays the Notes table header fields in console
    And user enters Filter "<filtername>" value as "<filtervalue>"
    And user verifies the search result

    Examples: 
      | TabName               | filtername | filtervalue |
      | Notes & Discrepancies | Site ID    | Hello       |

  Scenario: Closing the browser
    Then user closes the browser
