package cucumber.framework.helper;

import java.io.FileNotFoundException;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import cucumber.framework.utility.ResourceHelper;

public class LoggerHelper {

	private static boolean root=false;
	public static Logger getLogger(Class clazz) 
	{
		if(root)
		{
		return Logger.getLogger(clazz);
		}
		try {
			PropertyConfigurator.configure(ResourceHelper.getResourcePathInputStream("\\src\\main\\resources\\configfile\\log4j.properties"));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		root=true;
		return Logger.getLogger(clazz);
	}
	
}
