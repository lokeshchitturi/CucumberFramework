package com.cucumber.framework.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.framework.PageObject.OC_SubjectMatrix_PageObject;
import cucumber.framework.PageObject.OC_ViewSubject_PageObject;
import cucumber.framework.utility.WebDriverUtility;

public class OC_SubjectMatrix_StepDefinition {
	
	@Given("^user clicks on proceed to enter data$")
	public void user_clicks_on_proceed_to_enter_data() throws Throwable
	{
		OC_SubjectMatrix_PageObject.clickProceedToEnterData();
	}

	@Given("^user selects the startDate/Time as \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_selects_the_startDate_Time_as(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
	    OC_SubjectMatrix_PageObject.enterStartDate(arg1);
	    OC_SubjectMatrix_PageObject.selectStartHour(arg2);
	    OC_SubjectMatrix_PageObject.selectStartMinute(arg3);
	    
	}

	@Given("^user selects the endDate/Time as \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_selects_the_endDate_Time_as(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    OC_SubjectMatrix_PageObject.enterEndDate(arg1);
	    OC_SubjectMatrix_PageObject.selectEndHour(arg2);
	    OC_SubjectMatrix_PageObject.selectEndMinute(arg3);
	    
	}
	
	
	@Given("^user searches for the subjectID \"([^\"]*)\" in subject matrix table$")
	public void user_searches_for_the_subjectID_in_subject_matrix_table(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_SubjectMatrix_PageObject.searchSubject(arg1);
		WebDriverUtility.logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("SearchSubject"));
		
		
	}

	@Given("^user schedules the event \"([^\"]*)\"$")
	public void user_schedules_the_event(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_SubjectMatrix_PageObject.scheduleEvent(arg1);
	}

	@Given("^user opens the subject ID$")
	public void user_opens_the_subject_ID() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_SubjectMatrix_PageObject.openSubject();
		//OC_ViewSubject_PageObject.initializeObjects();
	}
	
	@Given("^user clicks on Enter Data in the event \"([^\"]*)\"$")
	public void user_clicks_on_Enter_Data_in_the_event(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_SubjectMatrix_PageObject.EnterDataEvent(arg1);
	}

	
}
