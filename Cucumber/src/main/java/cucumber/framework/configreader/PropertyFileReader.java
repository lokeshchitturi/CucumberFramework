package cucumber.framework.configreader;


import java.util.Properties;
import org.apache.log4j.Level;
import cucumber.framework.configuration.browser.BrowserType;
import cucumber.framework.utility.ResourceHelper;

public class PropertyFileReader implements ConfigReader {

	private Properties prop=null;

	public PropertyFileReader() {
		prop=new Properties();
		try {
			prop.load(ResourceHelper.getResourcePathInputStream("/src/main/resources/configfile/config.properties"));
			
		} catch (Exception e) {
			// TODO: handle exception
		}	
	}
	
	public BrowserType getBrowser()
	{
		return BrowserType.valueOf(prop.getProperty("Browser"));
	}
	
	public int getPageLoadTime()
	{
		return Integer.valueOf(prop.getProperty("PageLoadTimeOut"));
	}
	
	public int getImplicityWait()
	{
		return Integer.valueOf(prop.getProperty("ImplicitWait"));
	}
	
	public int getExplicityWait()
	{
		return Integer.parseInt(prop.getProperty("ExplicitWait"));
	}
	
	public Level getLoggerLevel()
	{
		switch (prop.getProperty("Logger.level")) {
		case "INFO":
			return Level.INFO;
		case "DEBUG":
			return Level.DEBUG;
		case "ERROR":	
			return Level.ERROR;
		case "WARN":
			return Level.WARN;
		case "FATAL":
			return Level.FATAL;
		}
		return Level.ALL;
	}

	public String getOCusername1() {
		// TODO Auto-generated method stub
		return prop.getProperty("OCusername1");
	}

	public String getOCpassword1() {
		// TODO Auto-generated method stub
		return prop.getProperty("OCpassword1");
	}

	public String getURL() {
		// TODO Auto-generated method stub
		return prop.getProperty("URL");
	}
	
	public static void main(String[] args) {
		PropertyFileReader p=new PropertyFileReader();
		System.out.println("Completed");
	}
}
