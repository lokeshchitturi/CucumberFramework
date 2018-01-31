package cucumber.framework.PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.aventstack.extentreports.Status;

import cucumber.framework.helper.DropDownHelper;
import cucumber.framework.utility.WebDriverUtility;

public class OC_AddSubject_PageObject extends WebDriverUtility {

	static String subjectId_textbox = "name:label";
	static String personId_textbox = "name:uniqueIdentifier";
	static String secondaryId_textbox = "name:secondaryLabel";
	static String enrollmentDate_dropdown = "name:enrollmentDate";
	static String gender_dropdown = "name:gender";
	static String dob_dropdown = "name:dob";
	static String saveAndAssignEvent_button = "name:submitEvent";
	static String saveAndAddSubject_button = "name:submitEnroll";
	static String saveAndFinish_button = "name:submitDone";
	static String AddSubjectSuccessMsg="cssselector:.title_manage";
	static String addSubject_Link="id:addSubject";
	static String studyEvent_dropdown="name:studyEventDefinition";
	static String startDate_textbox="name:startDate";
	static String add_button="name:addSubject";
	static String cancel_button="name:cancel";
	
	public static void clickAddButton() throws Exception
	{
		try {
			getWebElement(add_button).click();
			logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("FilledAddSubjectForm"));
			logger.log(Status.PASS, " Clicked on add button in 'Add Subject Form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}
	
	public static void clickCancelButton() throws Exception
	{
		try {
			getWebElement(cancel_button).click();
			logger.log(Status.PASS, " Clicked on cancel button in 'Add Subject Form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}
	
	public static void clickAddSubjectLink() throws Exception
	{
		try {
			getWebElement(addSubject_Link).click();
			System.out.println("Still code");
			logger.log(Status.PASS, " Clicked on add subject link");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}
	
	public static void clickLinkOnTab(String tabName) throws Exception
	{
		try {
			driver.findElement(By.linkText(tabName)).click();
			logger.log(Status.PASS, "Clicked on "+tabName);
			logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("ClickedTab"));
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}
	
	public static void enterSubjectID(String subjectID) throws Exception {
		try {
			getWebElement(subjectId_textbox).sendKeys(subjectID);
			logger.log(Status.PASS, " Entered subject id in 'Add Subject form'");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}

	public static void enterPersonID(String personID) throws Exception {
		try {
			getWebElement(personId_textbox).sendKeys(personID);
			logger.log(Status.PASS, "Entered person id in 'Add Subject form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}

	public static void enterSecondaryID(String secondaryID) throws Exception {
		try {
			getWebElement(secondaryId_textbox).sendKeys(secondaryID);
			logger.log(Status.PASS, "Entered secondary id in 'Add Subject form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}

	public static void selectEnrollDate(String enrollDate) throws Exception {
		try {
			getWebElement(enrollmentDate_dropdown).clear();
			getWebElement(enrollmentDate_dropdown).sendKeys(enrollDate);
			logger.log(Status.PASS, "Entered enrolled date in 'Add Subject form'");

		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}

	public static void selectgender(String gender) throws Exception {

		try {
			DropDownHelper.selectUsingVisibeValue(getWebElement(gender_dropdown), gender);
			logger.log(Status.PASS, "Selected gender in 'Add Subject form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}

	public static void selectDOB(String dob) throws Exception {
		try {
			getWebElement(dob_dropdown).sendKeys(dob);
			logger.log(Status.PASS, "Entered dob in 'Add Subject form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}

	public static void selectStudyEvent(String eventName) throws Exception
	{
		try {
			DropDownHelper.selectUsingVisibeValue(getWebElement(studyEvent_dropdown), eventName);
			logger.log(Status.PASS, "Selected study event in 'Add Subject form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}
	
	public static void enterStartDate(String startDate) throws Exception
	{
		try {
			WebElement ele=getWebElement(startDate_textbox);
			ele.clear();
			ele.sendKeys(startDate);
			logger.log(Status.PASS, "Selected start date in 'Add Subject form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}
	
	public static void clickSaveAndAssignEvent() throws Exception {
		try {
			getWebElement(saveAndAssignEvent_button).click();
			logger.log(Status.PASS, "Clicked on save and assign event in 'Add Subject form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}

	public static void clickSaveAndAddSubject() throws Exception {
		try {
			getWebElement(saveAndAddSubject_button).click();
			logger.log(Status.PASS, "Clicked on save and Add Subject in 'Add Subject form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}

	public static void clickSaveAndFinish() throws Exception {
		try {
			getWebElement(saveAndFinish_button).click();
			logger.log(Status.PASS, "Ciicked on save and finish in 'Add Subject form'");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw new Exception(e);
		}
	}
	
	public static void verifyAddSubject() throws Exception {
		try {
			String msg=getWebElement(AddSubjectSuccessMsg).getText();
			System.out.println(msg);
			if(msg.contains("View"))
			{
				logger.log(Status.PASS, "Subject is added sucesfully");
			}
			else
			{
				throw new Exception();
			}
			
			driver.findElement(By.partialLinkText("Study Subject Record")).click();
			logger.addScreenCaptureFromPath(WebDriverUtility.takeScreenshot("SucessFulAddedSubject"));
			
		} catch (Exception e) {
			logger.log(Status.FAIL, e);
			throw e;
		}
	}

}
