package cucumber.framework.PageObject;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.aventstack.extentreports.Status;

import cucumber.framework.helper.WaitHelper;
import cucumber.framework.utility.RobotUtility;
import cucumber.framework.utility.WebDriverUtility;

public class OC_NotesAndDiscrepanices extends WebDriverUtility{
	
	static String notesDiscrepanciesHeader_table="cssselector:table#listNotes > thead > tr.header >td";
	static String notesDiscrepanciesFilter_table="cssselector:table#listNotes > thead > tr.filter >td";
	
	
	static List<WebElement> headerList;
	static List<WebElement> filterlist;
	
	
	static String failureMsg_search="xpath://*[@id='listNotes']/tbody[2]/tr/td";
	
	
	
	
	public static void enterFilter(String filterHeader,String filterValue) throws Exception
	{
		try {
				
			int index=getHeaderindex(filterHeader);
			filterlist=getWebElements(notesDiscrepanciesFilter_table);
			WebElement ele=filterlist.get(index);
			ele.click();
			RobotUtility r=new RobotUtility();
			r.enterData(filterValue);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.log(Status.FAIL, e);
			throw e;
		}
	}
	
	public static void verifySearchResult() throws Exception
	{
		try {
			Thread.sleep(3000);
			WebElement ele=getWebElement(failureMsg_search);
			
			WaitHelper.getFluentWait(20, 5).until(ExpectedConditions.elementToBeClickable(ele));
			System.out.println(ele.getText());
			if(ele.getText().equals("There were no results found."))
			{
				logger.log(Status.FAIL, "No search results found");
				throw new Exception();
			}
			logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("searchresult"));
			
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}
	}
	
	public static int getHeaderindex(String headerName) throws Exception
	{
		int index=0;
		try {
			headerList=getWebElements(notesDiscrepanciesHeader_table);
			for (WebElement webElement : headerList) {
				
/*				if(webElement.getText().equals(""))
					continue;*/
				
				if(webElement.getText().equalsIgnoreCase(headerName))
				{
					break;
				}
				index=index+1;
			}
			return index;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		
	}
	
	public static void displayHeader() throws Exception
	{
		try {

			 headerList=getWebElements(notesDiscrepanciesHeader_table);
			for (WebElement webElement : headerList) {
				System.out.println(webElement.getText());
			}
			logger.log(Status.PASS, "Able to display header values in console");
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}

}
