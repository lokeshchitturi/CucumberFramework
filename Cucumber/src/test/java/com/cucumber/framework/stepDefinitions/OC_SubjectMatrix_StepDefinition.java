package com.cucumber.framework.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.framework.PageObject.OC_SubjectMatrix_PageObject;
import cucumber.framework.utility.WebDriverUtility;

public class OC_SubjectMatrix_StepDefinition {

	@Given("^user searches for the subjectID \"([^\"]*)\" in subject matrix table$")
	public void user_searches_for_the_subjectID_in_subject_matrix_table(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_SubjectMatrix_PageObject.searchSubject(arg1);
		WebDriverUtility.logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("Sample"));
	}

	@Given("^user opens the subject ID$")
	public void user_opens_the_subject_ID() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_SubjectMatrix_PageObject.openSubject();
	}

	
}
