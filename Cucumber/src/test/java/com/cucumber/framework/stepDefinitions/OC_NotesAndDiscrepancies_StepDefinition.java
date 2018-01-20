package com.cucumber.framework.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.framework.PageObject.OC_NotesAndDiscrepanices;

public class OC_NotesAndDiscrepancies_StepDefinition {

	
	@Given("^user displays the Notes table header fields in console$")
	public void user_displays_the_Notes_table_header_fields_in_console() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_NotesAndDiscrepanices.displayHeader();
		
	}
	
	@Given("^user enters Filter \"([^\"]*)\" value as \"([^\"]*)\"$")
	public void user_enters_Filter_value_as(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_NotesAndDiscrepanices.enterFilter(arg1, arg2);
	}

	@Given("^user verifies the search result$")
	public void user_verifies_the_search_result() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    OC_NotesAndDiscrepanices.verifySearchResult();
	}


	
	
}
