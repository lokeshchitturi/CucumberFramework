package cucumber.framework.helper;

import org.apache.log4j.Logger;

import org.openqa.selenium.WebElement;

public class VerificationHelper {


	private static Logger log=LoggerHelper.getLogger(VerificationHelper.class);
	
	public static boolean isDisplayed(WebElement element)
	{
		try {
			element.isDisplayed();
			log.info("element is displayed"+element.getText());
			return true;
		} catch (Exception e) {
			// TODO: handle exception
			log.error(e);
			return false;
		}
	}
	
	public static String readElementText(WebElement element)
	{
		
		try {
			if(element.isDisplayed())
			{
				String text=element.getText();
				log.info("element text is :"+text);
				return text;
			}
			else
			{
				log.error("element is not dispalyed :");
				return null;
			}
		} catch (Exception e) {
			// TODO: handle exception
			log.error("element is null");
			return null;
		}
	}
	
	public static String readValueFromInput(WebElement element)
	{
		try{
			if(element.isDisplayed())
			{
				String text=element.getAttribute("value");
				log.info("element input text is :"+text);
				return text;
			}
			else
			{
				log.error("element is not dispalyed :");
				return null;
			}
		}
		catch (Exception e) {
			// TODO: handle exception
			log.error("element is null");
			return null;
		}
	}
	
	public static synchronized boolean isElementPresent(WebElement element)
	{
		boolean flag=false;
		if(element ==null)
		{
			log.info("element is null");
			return flag ;
		}
		
		if(element.isDisplayed())
		{
			log.info("Element is displayed "+element.getText());
			flag=true;
			return flag;
		}
		{
			log.info("Element is not displayed "+element.getText());
			return flag;
		}
	}
	
	public static synchronized boolean isElementNotPresent(WebElement element)
	{
		boolean flag=false;
		
		try {
	 		flag=element.isDisplayed();
			log.info("Element is displayed "+element.getText());
			return flag;
		} catch (Exception e) {
			log.info("Element is not displayed "+element.getText());	
			return flag=true;
		}
		
	}
	
	
	public static synchronized boolean verifyElementText(WebElement element,String expectedText)
	{
		if(element ==null)
		{
			log.info("element is null");
			return false;
		}
		String actualText=element.getText();
		if(actualText.equalsIgnoreCase(expectedText))
		{
			log.info("Element text are equal");
			return true;
		
		}	else
		{
			log.info("Element text are not equal");
			return false;
		}
		
	}
}
