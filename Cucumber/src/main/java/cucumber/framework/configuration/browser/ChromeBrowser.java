package cucumber.framework.configuration.browser;

import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.framework.utility.ResourceHelper;

public class ChromeBrowser {

	public DesiredCapabilities getChromeCapabilites()
	{
		
		DesiredCapabilities chrome=DesiredCapabilities.chrome();
		
		chrome.setJavascriptEnabled(true);
		return chrome;
		
	}
	
	
	public WebDriver getChromeBrowser(Capabilities cap)
	{
		System.setProperty("webdriver.chrome.driver", ResourceHelper.getResourcePath("\\src\\main\\resources\\driver\\chromedriver.exe"));
		return new ChromeDriver(cap);
	}
}
