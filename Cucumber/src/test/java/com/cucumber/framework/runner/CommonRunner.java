package com.cucumber.framework.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import cucumber.api.testng.AbstractTestNGCucumberTests;

/*@CucumberOptions(features="classpath:featurefile/Sample.feature",
glue={"com/cucumber/framework/stepDefinitions","cucumber/framework/helper"},tags="@TC1",
plugin={"pretty","json:target/cucumber-Json-report.json","html:target/cucumber-html-report.html"})
public class CommonRunner extends AbstractTestNGCucumberTests {

}
*/

@RunWith(Cucumber.class)
@CucumberOptions(features="classpath:featurefile/OpenClinic.feature",
glue={"com/cucumber/framework/stepDefinitions","cucumber/framework/helper"},tags={"@wf"},
plugin={"pretty:STDOUT","json:target/cucumber-Json-report.json","html:target/cucumber-html-report.html"})
public class CommonRunner{
	
}
