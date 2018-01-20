package cucumber.framework.helper;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.NoSuchFrameException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.framework.utility.WebDriverUtility;

public class WaitHelper extends WebDriverUtility{

	
	private static Logger log=LoggerHelper.getLogger(WaitHelper.class);
	
	
	public static void setImplicitTime(long timeout,TimeUnit unit)
	{
		log.info(unit);
		driver.manage().timeouts().implicitlyWait(timeout, unit == null ? TimeUnit.SECONDS:unit);
	}
	
	public static WebDriverWait getFluentWait(int timeOutInSeconds,int pollingEveryMilliSec)
	{
		WebDriverWait wait= new WebDriverWait(driver, timeOutInSeconds);
		wait.pollingEvery(pollingEveryMilliSec, TimeUnit.MILLISECONDS);
		wait.ignoring(NoSuchElementException.class);
		wait.ignoring(ElementNotVisibleException.class);
		wait.ignoring(StaleElementReferenceException.class);
		wait.ignoring(NoSuchFrameException.class);
		
		return wait;
	}
	
	public static WebDriverWait getExplicitWait(int timeOutInSeconds)
	{
		WebDriverWait wait=new WebDriverWait(driver, timeOutInSeconds);
		return wait;
	}
	
	public static void FluentWaitForElementVisibility(WebElement element,int timeOutInSeconds,int pollingEveryMilliSec)
	{
		WebDriverWait wait=getFluentWait(timeOutInSeconds, pollingEveryMilliSec);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
	
	public static void ExplicitWaitForElementVisibility(WebElement element,int timeOutInSeconds)
	{
		WebDriverWait wait=getExplicitWait(timeOutInSeconds);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
	
}
