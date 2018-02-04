package cucumber.framework.utility;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;


import cucumber.framework.configreader.ObjectRepo;
import cucumber.framework.configreader.PropertyFileReader;
import cucumber.framework.configuration.browser.BrowserType;
import cucumber.framework.configuration.browser.ChromeBrowser;
import cucumber.framework.configuration.browser.IEExplorerBrowser;
import cucumber.framework.helper.LoggerHelper;


public class WebDriverUtility {
	private static Logger log=LoggerHelper.getLogger(WebDriverUtility.class);
	
	public static WebDriver driver;
	public static ExtentReports extent;
	public static ExtentTest logger;
	
	
	public static WebDriver getBrowserObject(BrowserType bType) throws Exception {
		try {
			log.info(bType);

			switch (bType) {

			case Chrome:
				ChromeBrowser chrome = ChromeBrowser.class.newInstance();
				return chrome.getChromeBrowser(chrome.getChromeCapabilites());

			case IE:
				IEExplorerBrowser iExplore = IEExplorerBrowser.class.newInstance();
				return iExplore.getIExplorerDriver(iExplore.getIExplorerCapabilities());
			default:
				throw new Exception(" Driver Not Found : " + new PropertyFileReader().getBrowser());
			}
		} catch (Exception e) {
			log.equals(e);
			throw e;
		}
	}
	
	public static void setUpDriver(BrowserType bType) throws Exception {
		
		driver = getBrowserObject(bType);
		log.debug("InitializeWebDrive : " + driver.hashCode());
		driver.manage().timeouts().pageLoadTimeout(ObjectRepo.reader.getPageLoadTime(), TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(ObjectRepo.reader.getImplicityWait(), TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	
	public static String takeScreenshot(String screenshotName) throws IOException
	{
		
		File destDir=new File(ResourceHelper.getResourcePath("screenshots")+System.getProperty("file.separator")+DateTimeHelper.getCurrentDate());
		System.out.println(ResourceHelper.getResourcePath("screenshots")+System.getProperty("file.separator")+DateTimeHelper.getCurrentDate());
		if(!destDir.exists())
		{
			destDir.mkdir();
		}
		
		File destpath=new File(destDir.getAbsolutePath()+System.getProperty("file.separator")+screenshotName+"_"+DateTimeHelper.getCurrentDateTime()+".jpg");
			
		File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		
		try {
			FileUtils.copyFile(src, destpath);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			throw e;
		}
		
		
		return destpath.getAbsolutePath();
		
	}
	
	public static WebElement getWebElement(String locator) throws Exception
	{
		String[] input=locator.split(":");
		switch (input[0].toLowerCase()) {
		case "id":
			return driver.findElement(By.id(input[1]));
		case "name":
			return driver.findElement(By.name(input[1]));
		case "xpath":
			return driver.findElement(By.xpath(input[1]));
		case "cssselector":
			return driver.findElement(By.cssSelector(input[1]));
		case "classname":
			return driver.findElement(By.className(input[1]));
		case "linktext":
			return driver.findElement(By.linkText(input[1]));
		case "partiallinktext":
			return driver.findElement(By.partialLinkText(input[1]));	
		default:
			throw new Exception("Locator not found"+locator);
		}
	}
	
	public static List<WebElement> getWebElements(String locator) throws Exception
	{
		String[] input=locator.split(":");
		switch (input[0].toLowerCase()) {
		case "id":
			return driver.findElements(By.id(input[1]));
		case "name":
			return driver.findElements(By.name(input[1]));
		case "xpath":
			return driver.findElements(By.xpath(input[1]));
		case "cssselector":
			return driver.findElements(By.cssSelector(input[1]));
		case "classname":
			return driver.findElements(By.className(input[1]));
		case "linktext":
			return driver.findElements(By.linkText(input[1]));
		case "partiallinktext":
			return driver.findElements(By.partialLinkText(input[1]));
		default:
			throw new Exception("Locator not found"+locator);
		}
	}


	public static void main(String[] args) {
		try {
			takeScreenshot("hello");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
