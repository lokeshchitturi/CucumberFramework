package cucumber.framework.helper;

import java.util.LinkedList;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class DropDownHelper {

	
	private static Logger log=LoggerHelper.getLogger(DropDownHelper.class);
	
	
	public static void selectUsingVisibeValue(WebElement element,String visibleValue)
	{
		Select select=new Select(element);
		select.selectByVisibleText(visibleValue);
		log.info("WebElement :"+element+" Value :"+visibleValue);
		
	}
	
	public static void selectUsingIndexValue(WebElement element,int indexValue)
	{
		Select select=new Select(element);
		select.selectByIndex(indexValue);
		log.info("WebElement :"+element+" IndexValue :"+indexValue);
	}
	
	public static void selectUsingValue(WebElement element,String value)
	{
		Select select=new Select(element);
		select.selectByValue(value);
		log.info("WebElement :"+element+" Value :"+value);
	}
	
	public static String getSelectedValue(WebElement element)
	{
		Select select=new Select(element);
		String value =select.getFirstSelectedOption().getText();
		log.info("WebElement :"+element+" Value :"+value);
		return value;
	}
	
	public static List<String> getAllDropDownOptions(WebElement element)
	{
		Select select=new Select(element);
		List<WebElement> elementList= select.getOptions();
		List<String> valueList=new LinkedList<>();
		for (WebElement e: elementList) {
			log.info(e.getText());
			valueList.add(e.getText());
		}
	
		return valueList;
	}
	
}
