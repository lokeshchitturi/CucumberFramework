package com.cucumber.framework.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.framework.PageObject.OC_CRFForm_PageObject;
import cucumber.framework.PageObject.OC_ViewSubject_PageObject;

public class OC_CRFForm_StepDefinition {

	@Given("^user opens the form \"([^\"]*)\" for the event \"([^\"]*)\"$")
	public void user_fills_the_form_for_the_event(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 //OC_ViewSubject_PageObject.fillForm(arg1);
		OC_ViewSubject_PageObject.openForm(arg1);
	}
	
	@Given("^user inputs the form field \"([^\"]*)\"$")
	public void user_inputs_the_form_field(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    OC_ViewSubject_PageObject.enterFormField(arg1);
	}

	@Given("^user clicks on Save button$")
	public void user_clicks_on_Save_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_CRFForm_PageObject.clickSaveButton();
	}

	@Given("^user clicks on Exit button$")
	public void user_clicks_on_Exit_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_CRFForm_PageObject.clickExitButton();
	}
	
}
