package cucumber.framework.helper;


import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;

import cucumber.framework.utility.WebDriverUtility;
public class AlertHelper extends WebDriverUtility{
	
	
	private static Logger log=LoggerHelper.getLogger(AlertHelper.class);
	

	public static Alert getAlert()
	{
		return driver.switchTo().alert();
	}
	
	public static void acceptAlert()
	{
		getAlert().accept();
	}
	
	public static void dismissAlert()
	{
		getAlert().dismiss();
	}
	
	public static String getAlertText()
	{
		String value=getAlert().getText();
		log.info("Alert text value :"+value);
		return value;
	}
	
	public static boolean isAlertPresent()
	{
		try {
		driver.switchTo().alert();
		log.info("Alert present");
		return true;	
		} catch (Exception e) {
		log.info("Alert not present");	// TODO: handle exception
		return false;
		}
	}
	
	public static void AcceptAlertIfPresent()
	{
		if(!isAlertPresent())
			return;
		acceptAlert();
	}
	
	public static void DismissAlertIfPresent()
	{
		if(!isAlertPresent())
			return;
		dismissAlert();
	}
    
	public static void AcceptPrompt(String text)
	{
		if(!isAlertPresent())
			return;
		Alert alert=getAlert();
		alert.sendKeys(text);
		alert.accept();
	}
}
