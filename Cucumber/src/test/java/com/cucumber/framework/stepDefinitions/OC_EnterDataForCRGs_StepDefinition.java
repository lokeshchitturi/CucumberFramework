package com.cucumber.framework.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.framework.PageObject.OC_EnterDataForCRFs_PageObject;

public class OC_EnterDataForCRGs_StepDefinition {

	@Given("^user searches for the form \"([^\"]*)\" and opens it$")
	public void user_searches_for_the_form_and_opens_it(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_EnterDataForCRFs_PageObject.findFormAndOpen(arg1);
	}

	
}
