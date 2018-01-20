package cucumber.framework.helper;


import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.aventstack.extentreports.Status;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.framework.configreader.ObjectRepo;
import cucumber.framework.configreader.PropertyFileReader;
import cucumber.framework.utility.ExtentFactory;
import cucumber.framework.utility.WebDriverUtility;

public class TestBase extends WebDriverUtility{
	
	
	private final Logger log=LoggerHelper.getLogger(TestBase.class);
	
	
	
	@Before()
	public void before(Scenario scenario) throws Exception {
		try {
			ObjectRepo.reader = new PropertyFileReader();
			
			log.info("property file reader object is created"+ObjectRepo.reader);
			
			log.info(ObjectRepo.reader.getBrowser());
			extent=ExtentFactory.getInstance();
			logger=extent.createTest(scenario.getName());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		}
	}
	

	@After()
	public void after(Scenario scenario) {
		//driver.quit();
		scenario.write("Finished scenario");
		System.out.println("------------------");
		System.out.println(scenario.getStatus());
		if(!scenario.isFailed())
		{
			logger.log(Status.PASS, scenario.getName()+" is passed");
			extent.flush();		
		//	driver.quit();	
		}
		else
		{
			System.out.println("Entered Failed block");
			try {
				
				logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("CredentialsEentered"));
				logger.log(Status.FAIL, scenario.getName()+" is failed");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			extent.flush();		
			//driver.quit();
		}
		
		
	}

}
