package cucumber.framework.helper;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.framework.utility.WebDriverUtility;

public class JavaScriptHelper extends WebDriverUtility{

	private static Logger log=LoggerHelper.getLogger(JavaScriptHelper.class);
	
	
	
	public static Object executeJavaScript(String script)
	{
		JavascriptExecutor exe=(JavascriptExecutor)driver;
		log.info("executed javascript "+script);
		return exe.executeScript(script);
	}
	
	public static Object executJavaScript(String script,Object... args)
	{
		JavascriptExecutor exe=(JavascriptExecutor) driver;
		log.info("executed javascript "+script);
		return exe.executeScript(script, args);
	}
	
	public static void scrollToElement(WebElement element)
	{
		executJavaScript("window.scrollTo(arguments[0],arguments[1]", element.getLocation().x,element.getLocation().y);
		log.info("scrolled to the element :"+element.getText());
	}
	
	public static void scrollToElementAndClick(WebElement element)
	{
		scrollToElement(element);
		element.click();
		log.info("scrolled to element "+element.getText()+" and clicked");
	}
	
	public static void scrollIntoView(WebElement element)
	{
		executJavaScript("arguments[0].scrollIntoView()", element);
		log.info("Element "+element.getText()+" is scrolled into view");
	}
	
	public static void scrollIntoViewAndClick(WebElement element)
	{
		scrollIntoView(element);
		element.click();
		log.info("Element "+element.getText()+" is scrolled into view and clicked");
	}
	
	public static void scrollDownVertically()
	{
		executeJavaScript("window.scrollTo(0,document.body.scrollHeight)");
	}
	
	public static void scrollUpVertically()
	{
		executeJavaScript("window.scrollTo(0,-document.body.scrollHeight");
	}
	
	public static void scrollDownBit()
	{
		executeJavaScript("window.scrollTo(0,1500)");
	}
	
	public static void scrollUpBit()
	{
		executeJavaScript("window.scrollTo(0,-1500)");
	}
	
	public static void scrollRightHorizontally()
	{
		executeJavaScript("window.scrollTo(document.body.scrollWidth,0)");
	}
	
	public static void scrollLefttHorizontally()
	{
		executeJavaScript("window.scrollTo(-document.body.scrollWidth,0)");
	}
	
	public static void scrollRightBit()
	{
		executeJavaScript("window.scrollTo(1500,0)");
	}
	
	public static void scrollLeft()
	{
		executeJavaScript("window.scrollTo(-1500,0)");
	}
	
	public static void zoomInByPercentage(String percentageNumber)
	{
		executeJavaScript("document.body.style.zoom='"+percentageNumber+"%'");
	}
	
	public static void zoomIn100Percentage()
	{
		executeJavaScript("document.body.style.zoom='100%'");
	}
}
 