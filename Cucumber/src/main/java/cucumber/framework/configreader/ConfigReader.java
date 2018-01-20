package cucumber.framework.configreader;

import org.apache.log4j.Level;

import cucumber.framework.configuration.browser.BrowserType;

public interface ConfigReader {


	public int getPageLoadTime();
	public int getImplicityWait();
	public int getExplicityWait();
	public Level getLoggerLevel();
	public BrowserType getBrowser();
	public String getOCusername1();
	public String getOCpassword1();
	public String getURL();
	
	
	
	
}
