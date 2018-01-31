package cucumber.framework.PageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.aventstack.extentreports.Status;

import cucumber.framework.helper.AlertHelper;
import cucumber.framework.utility.WebDriverUtility;

public class OC_DataSet_PageObject extends WebDriverUtility{
	
	
	static String tasks_link="id:nav_Tasks_link";
	static String proccedToCreate_button="name:Submit";
	static String selectAllItems_link="xpath://*[@id='sidebar_Info_open']/td/div/span/a[6]/b";
	static String saveAndDefineScope_button="name:saveContinue";
	static String DTScontinue_button="name:submit";
	static String datasetName="name:dsName";
	static String datasetDescription="name:dsDesc";
	static String SDPcontinue_button="name:remove";
	static String itemStatus_radio="xpath://input[@name='itemStatus']";
	static String confirmAndSave_button="name:btnSubmit";
	
	static String downloadFormatList="xpath:/html/body/table[1]/tbody/tr/td/table[2]/tbody/tr/td[2]/table[1]/tbody/tr/td/ul/li";
	
	public static void downloadData(String formatName) throws Exception
	{
		try {
			List<WebElement> list=getWebElements(downloadFormatList);
			for (WebElement webElement : list) {
				if(webElement.getText().contains(formatName))
				{
					webElement.findElement(By.xpath("a")).click();
					break;
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}
	
	public static void clickOnConfirmAndSave() throws Exception
	{
		try {
			getWebElement(confirmAndSave_button).click();
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, "unable to click on Confirm And Save button");
			throw e;
		}
	}
	
	
	public static void clickOnItemStatus() throws Exception
	{
		try {
			List<WebElement> list=getWebElements(itemStatus_radio);
			for (WebElement webElement : list) {
				if(webElement.getAttribute("value").equals("3"))
				{
					webElement.click();
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, "unable to click on Item Status");
			throw e;
		}
	}
	
	
	
	
	public static void clickSDPContinueButton() throws Exception
	{
		try {
			getWebElement(SDPcontinue_button).click();
			getWebElement(confirmAndSave_button).click();
			
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}
	
	
	public static void enterDataSetName(String name) throws Exception
	{
		try {
			getWebElement(datasetName).sendKeys(name);
			logger.log(Status.PASS, "able to enter Data set name");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, "unable to enter Data set name");
			throw e;
		}
	}
	
	public static void enterDataSetDescription(String desc) throws Exception
	{
		try {
			getWebElement(datasetDescription).sendKeys(desc);
			logger.log(Status.PASS, "able to enter Data set descritption");
			logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("DataSetForm"));
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, "unable to enter Data set descritption");
			throw e;
		}
	}
	
	public static void ClickDefineTemporalScopeContinue() throws Exception
	{
		try {
			getWebElement(DTScontinue_button).click();
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, "unable to click Define Temporal scope button");
			throw e;
		}
	}
	
	
	public static void clickSaveAndDefineScope() throws Exception
	{
		try {
			getWebElement(saveAndDefineScope_button).click();
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, "unable to click save and Define Scope");
			throw e;
		}
	}
	
	
	private static void clickOnTaskLink() throws Exception
	{
		try {
			getWebElement(tasks_link).click();
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, "unable to click Task link");
			throw e;
		}
	}
	
	public static void clickOnTask(String taskName) throws Exception
	{
		try {
			clickOnTaskLink();
			driver.findElement(By.xpath("//*[@id='subnav_Tasks']/div//a[text()='"+taskName+"']")).click();
			logger.log(Status.PASS, "Clicked on "+taskName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.log(Status.FAIL, "Unable to click on task "+taskName);
			throw e;
		}
	}
	
	public static void clickOnProceedToCreate() throws Exception
	{
		try {
			getWebElement(proccedToCreate_button).click();
			logger.log(Status.PASS, "able to click on proceed to create button");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, "Unable to click on proceed to create button");
			throw e;
		}
	}
	
	public static void selectAllItemsLink() throws Exception
	{
		try {
			getWebElement(selectAllItems_link).click();
			AlertHelper.acceptAlert();
			logger.log(Status.PASS, "able to click on select all items link ");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, "Unable to click on select all items link ");
			throw e;
		}
	}
	
	
	

}
