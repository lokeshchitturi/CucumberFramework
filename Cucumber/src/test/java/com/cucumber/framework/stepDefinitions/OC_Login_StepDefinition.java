package com.cucumber.framework.stepDefinitions;

import org.testng.annotations.AfterSuite;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.framework.PageObject.OC_Login_PageObject;
import cucumber.framework.helper.TestBase;

public class OC_Login_StepDefinition {

	@Given("^user navigates to application$")
	public void user_navigates_to_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 
		OC_Login_PageObject.navigatesToURL();
	 
	 
	}

	@Given("^user enters valid username and password$")
	public void user_enters_valid_username_and_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 OC_Login_PageObject.enterCredentials();   
	}

	@Given("^user clicks on login$")
	public void user_clicks_on_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  OC_Login_PageObject.clickOnLogin();  
	}

	@Then("^user verifies the succesful login$")
	public void user_verifies_the_succesful_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  if(!OC_Login_PageObject.verifyLogin())
		  throw new Exception();
	}
	
	@Then("^user closes the browser$")
	public void user_closes_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  OC_Login_PageObject.closeBrowser();
	}
	
	
}
