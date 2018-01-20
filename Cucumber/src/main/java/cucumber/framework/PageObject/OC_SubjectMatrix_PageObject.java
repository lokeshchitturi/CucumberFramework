package cucumber.framework.PageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.aventstack.extentreports.Status;

import cucumber.framework.utility.WebDriverUtility;

public class OC_SubjectMatrix_PageObject extends WebDriverUtility{

	static String subjectMatrixHeader_table="cssselector:table#findSubjects > thead > tr.header > td";
	static String subjectMatrixFilter_table="cssselector:table#findSubjects > thead > tr.filter > td";
	static String subjectMatrixRows_table="cssselector:table#findSubjects > tbody.tbody > tr";
	
	static String subjectIDFilter_textbox="cssselector:#findSubjects > thead >tr.filter > td:nth-child(1)";
	
	static String subjectIDSearch_image="#findSubjects_row1 > td:nth-child(7) > a > img";
	
	static List<WebElement> rows;
	static List<WebElement> coloumns;
	static String subjectID_temp;
	public static void searchSubject(String subjectID) throws Exception
	{
		try {
			subjectID_temp=subjectID;
			WebElement ele=getWebElement(subjectIDFilter_textbox);
			
			Actions action=new Actions(driver);
			action.moveToElement(ele);
			action.doubleClick();
			action.sendKeys(subjectID);
			action.sendKeys(Keys.ENTER);
			action.build().perform();
			
			rows=getWebElements(subjectMatrixRows_table);
			if(rows.size()!=0)
			{
				logger.log(Status.PASS, "Table cotains some records releated to search");
			}
			else
			{
				throw new Exception("unable to find the subject with id :"+subjectID);
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.log(Status.FAIL, e);
			throw e;
		}
	}
	
	//table[@id='findSubjects']//tbody
	public static void  openSubject() throws Exception
	{
		try {
			
			for (WebElement webElement : rows) {
				coloumns=webElement.findElements(By.tagName("td"));
				if(coloumns.get(0).getText().equals(subjectID_temp))
				{
					WebElement ele=coloumns.get(6);
					ele.findElements(By.tagName("a")).get(0).click();
					logger.log(Status.PASS, "Able to opne the subject");
					logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("SubjectScreenshot"));
				}
			}
			
			
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
			
		}
	}
}



