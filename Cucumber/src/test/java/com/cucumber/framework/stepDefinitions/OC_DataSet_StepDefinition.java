package com.cucumber.framework.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.framework.PageObject.OC_DataSet_PageObject;

public class OC_DataSet_StepDefinition {
	
	

@Given("^user clicks on \"([^\"]*)\" in tasks list$")
public void user_clicks_on_in_tasks_list(String arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    OC_DataSet_PageObject.clickOnTask(arg1);
}

	@Given("^user clicks on Procced to create dataset link$")
	public void user_clicks_on_Procced_to_create_dataset_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_DataSet_PageObject.clickOnProceedToCreate();
		
	}

	@Given("^user clicks on Select All items in study link$")
	public void user_clicks_on_Select_All_items_in_study_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_DataSet_PageObject.selectAllItemsLink();
	}

	@Given("^user clicks on Save and define scope button$")
	public void user_clicks_on_Save_and_define_scope_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_DataSet_PageObject.clickSaveAndDefineScope();
	}

	@Given("^user clicks on Continue button in Define Temporal Scope page$")
	public void user_clicks_on_Continue_button_in_Define_Temporal_Scope_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_DataSet_PageObject.ClickDefineTemporalScopeContinue();
	}

	@Given("^user enters Name as \"([^\"]*)\" and description as \"([^\"]*)\"$")
	public void user_enters_Name_as_and_description_as(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_DataSet_PageObject.enterDataSetName(arg1);
		OC_DataSet_PageObject.enterDataSetDescription(arg2);
	}

	@Given("^user clicks on Continue button in Specify Dataset Properties page$")
	public void user_clicks_on_Continue_button_in_Specify_Dataset_Properties_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		OC_DataSet_PageObject.clickSDPContinueButton();
		OC_DataSet_PageObject.downloadData("HTML");
	}


}
