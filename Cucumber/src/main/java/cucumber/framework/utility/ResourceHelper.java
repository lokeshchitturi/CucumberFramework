package cucumber.framework.utility;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

public class ResourceHelper {
	
	public static String getResourcePath(String resource)
	{
		String path=getBaseResourcePath()+System.getProperty("file.separator")+resource;
		return path;
	}
	
	public static String getBaseResourcePath()
	{
	//	String path=ResourceHelper.class.getClass().getResource("/").getPath();
		String path=System.getProperty("user.dir");
		return path;
	}
	
	
	public static InputStream getResourcePathInputStream(String resource) throws FileNotFoundException
	{
		return new FileInputStream(ResourceHelper.getResourcePath(resource));
	}
	
	public static void main(String[] args) {
		System.out.println(getResourcePath("screenshots"));
	
	}

}
