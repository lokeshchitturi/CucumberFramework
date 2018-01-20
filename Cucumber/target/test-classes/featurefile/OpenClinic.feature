Feature: Validating functionalities of OpenClinic


@login
Scenario: Login Validation
Given user navigates to application
And user enters valid username and password
And user clicks on login
Then user verifies the succesful login



Scenario Outline: Adding a subject to the study
Given user logged into application
And user clicked on "<TabName>" link
And user enters the subject id as "<subjectID>"
And user enters the Person id as "<personID>"
And user enters the Secondary id as "<secondaryID>"
And user enters the date of enrolment date as "<enrollmentDate>"
And user selects gender as "<gender>"
And user enters date of birth as "<dob>"
And user clicks on save and finish button
Then user verifies succesful Add subject

Examples:
|TabName|subjectID|personID|secondaryID|enrollmentDate|gender|dob|
|Add Subject|5|105|205|14-Jan-2018|Male|07-Jan-1998|

@login
Scenario Outline: Searching subject
Given user logged into application
And user clicked on "<TabName>" link
And user searches for the subjectID "<SubjectIDValue>" in subject matrix table
And user opens the subject ID

Examples:
|TabName|SubjectIDValue|
|Subject Matrix|1043|

@login
Scenario Outline: Searching Notes & Discrepancies
Given user logged into application
And user clicked on "<TabName>" link
And user displays the Notes table header fields in console
And user enters Filter "<filtername>" value as "<filtervalue>"
And user verifies the search result

Examples:
|TabName|filtername|filtervalue|
|Notes & Discrepancies|Site ID|A|

@login
Scenario: Closing the browser
Then user closes the browser