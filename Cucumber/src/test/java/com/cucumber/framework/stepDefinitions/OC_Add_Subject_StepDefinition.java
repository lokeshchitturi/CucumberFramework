package com.cucumber.framework.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.framework.PageObject.OC_AddSubject_PageObject;
import cucumber.framework.PageObject.OC_Login_PageObject;
import cucumber.framework.utility.WebDriverUtility;

public class OC_Add_Subject_StepDefinition {

	@Given("^user logged into application$")
	public void user_logged_into_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_Login_PageObject.verifyLogin();
	}

	@Given("^user clicked on \"([^\"]*)\" link$")
	public void user_clicked_on_link(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    OC_AddSubject_PageObject.clickLinkOnTab(arg1);
	}

	@Given("^user enters the subject id as \"([^\"]*)\"$")
	public void user_enters_the_subject_id_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    OC_AddSubject_PageObject.enterSubjectID(arg1);
	}

	@Given("^user enters the Person id as \"([^\"]*)\"$")
	public void user_enters_the_Person_id_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    OC_AddSubject_PageObject.enterPersonID(arg1);
	}

	@Given("^user enters the Secondary id as \"([^\"]*)\"$")
	public void user_enters_the_Secondary_id_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    OC_AddSubject_PageObject.enterSecondaryID(arg1);
	}

	@Given("^user enters the date of enrolment date as \"([^\"]*)\"$")
	public void user_enters_the_date_of_enrolment_date_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    OC_AddSubject_PageObject.selectEnrollDate(arg1);
	}

	@Given("^user selects gender as \"([^\"]*)\"$")
	public void user_selects_gender_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    OC_AddSubject_PageObject.selectgender(arg1);
	}

	@Given("^user enters date of birth as \"([^\"]*)\"$")
	public void user_enters_date_of_birth_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    OC_AddSubject_PageObject.selectDOB(arg1);
	}

	@Given("^user clicks on save and finish button$")
	public void user_clicks_on_save_and_finish_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    WebDriverUtility.logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("FilledUpAddSubjectForm"));
	    OC_AddSubject_PageObject.clickSaveAndFinish();
	}
	
	@Then("^user verifies succesful Add subject$")
	public void user_verifies_succesful_Add_subject() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_AddSubject_PageObject.verifyAddSubject();
	}

	
}
