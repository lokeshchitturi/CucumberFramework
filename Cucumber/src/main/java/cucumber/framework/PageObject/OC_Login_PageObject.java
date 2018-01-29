package cucumber.framework.PageObject;


import java.io.IOException;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.aventstack.extentreports.Status;

import cucumber.framework.configreader.ObjectRepo;
import cucumber.framework.helper.VerificationHelper;
import cucumber.framework.helper.WaitHelper;
import cucumber.framework.utility.WebDriverUtility;

public class OC_Login_PageObject extends WebDriverUtility{

	static String username_textbox="id:username";
	static String password_textbox="id:j_password";
	static String login_button="name:submit";
	public static String loginSuccesMsg="linktext:Log Out";
	
	public static void navigatesToURL() throws Exception
	{
		try {
			setUpDriver(ObjectRepo.reader.getBrowser());
			driver.get(ObjectRepo.reader.getURL());
			if(driver.getTitle().equals("OpenClinica"))
			{
				logger.log(Status.PASS, "Succesfully navigated to URL");
				logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("homepage"));
			}
			else
			{
				throw new Exception(" application is down");
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, "Unable to navigate to URL :"+ObjectRepo.reader.getURL()+"\n"+e);
			throw e;
		}
	}
	
	public static void enterCredentials() throws Exception
	{
		try {
			getWebElement(username_textbox).sendKeys(ObjectRepo.reader.getOCusername1());
			getWebElement(password_textbox).sendKeys(ObjectRepo.reader.getOCpassword1());
			logger.log(Status.PASS, "username and password entered");
			logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("CredentialsEentered"));
		//	Thread.sleep(4000);
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
			//logger.a
		}
	}
	
	public static void clickOnLogin() throws Exception
	{
		try {
			getWebElement(login_button).click();
			logger.log(Status.PASS, "Clicked on login button");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}
	}
	
	public static boolean verifyLogin() throws IOException
	{
		boolean flag=false;
		try {
			WebElement ele=getWebElement(loginSuccesMsg);
			System.out.println(ele.getText());
			WaitHelper.getFluentWait(20, 5).until(ExpectedConditions.elementToBeClickable(ele));
			flag=VerificationHelper.isElementPresent(ele);
			
			if(flag)
			{
				logger.log(Status.PASS, "Login sucessfull");
				logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("VerifiedSucesfullLogin"));
				return true;
			}
			else
			{
				logger.log(Status.FAIL, "Login unsucessfull");
				logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("LoginSucesfull"));
				return false;
			}
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			return false;
		}
	}
	
	public static void closeBrowser() throws Exception
	{
		try {
			driver.close();
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}
	}

}
