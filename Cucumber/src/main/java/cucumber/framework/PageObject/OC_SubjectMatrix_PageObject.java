package cucumber.framework.PageObject;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.aventstack.extentreports.Status;

import cucumber.framework.helper.DropDownHelper;
import cucumber.framework.helper.WaitHelper;
import cucumber.framework.utility.WebDriverUtility;

public class OC_SubjectMatrix_PageObject extends WebDriverUtility {

	static String showMore_link = "id:showMore";
	static String subjectMatrixHeader_table = "cssselector:table#findSubjects > thead > tr.header > td";
	static String subjectMatrixFilter_table = "cssselector:table#findSubjects > thead > tr.filter > td";
	static String subjectMatrixRows_table = "cssselector:table#findSubjects > tbody.tbody > tr";

	// *[@id="findSubjects"]/tbody[1]
	static String subjectIDFilter_textbox = "cssselector:#findSubjects > thead >tr.filter > td:nth-child(1)";

	static String subjectIDSearch_image = "#findSubjects_row1 > td:nth-child(7) > a > img";
	static String proceedToEnterData_button = "name:Submit";
	static String startDate_textbox = "name:startDate";
	static String startHour_dropdown = "name:startHour";
	static String startMinute_dropdown = "name:startMinute";
	static String endDate_textbox = "name:endDate";
	static String endHour_dropdown = "name:endHour";
	static String endMinute_dropdown = "name:endMinute";

	static List<WebElement> rows;
	static List<WebElement> coloumns;
	static String subjectID_temp;

	// *[@id="subjectEvents"]/table/tbody/tr/td/div/div/div/div/div/div/div/div/div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[6]
	// *[@id="subjectEvents"]/table/tbody/tr/td/div/div/div/div/div/div/div/div/div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[4]

	public static void enterStartDate(String startDate) throws Exception {
		try {

			getWebElement(startDate_textbox).clear();
			getWebElement(startDate_textbox).sendKeys(startDate);
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}
	}

	public static void selectStartHour(String hour) throws Exception{
		try {
			DropDownHelper.selectUsingVisibeValue(getWebElement(startHour_dropdown), hour);
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}

	}

	public static void selectStartMinute(String minute) throws Exception{
		try {

			DropDownHelper.selectUsingVisibeValue(getWebElement(startMinute_dropdown), minute);
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}
	}

	public static void enterEndDate(String endDate) throws Exception{
		try {

			getWebElement(endDate_textbox).clear();
			getWebElement(endDate_textbox).sendKeys(endDate);
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}
	}

	public static void selectEndHour(String hour) throws Exception{
		try {
			DropDownHelper.selectUsingVisibeValue(getWebElement(endHour_dropdown), hour);
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}
	}

	public static void selectEndMinute(String minute) throws Exception{
		try {
			DropDownHelper.selectUsingVisibeValue(getWebElement(endMinute_dropdown), minute);
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}
	}

	public static void clickProceedToEnterData() throws Exception {
		try {
			getWebElement(proceedToEnterData_button).click();
			logger.log(Status.PASS, "Clicked on proceed to enter data button");
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}
	}

	public static int getHeaderIndex(String headerName) throws Exception {
		boolean flag = false;
		try {

			WebElement ele = getWebElement(showMore_link);
			if (ele.isDisplayed()) {
				ele.click();
			}

			List<WebElement> headers = getWebElements(subjectMatrixHeader_table);
			int count = 0;
			for (WebElement webElement : headers) {
				// System.out.println(webElement.getText());
				if (webElement.getText().trim().equalsIgnoreCase(headerName)) {
					flag = true;
					return count + 1;
				}
				count++;
			}

			if (flag == false) {
				throw new Exception("Unable to find the header in subject matrix table");
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.log(Status.FAIL, e);
			throw e;
		}
		return 0;

	}

	public static void searchSubject(String subjectID) throws Exception {
		try {
			subjectID_temp = subjectID;
			getWebElement(showMore_link).click();
			WebElement ele = getWebElement(subjectIDFilter_textbox);

			Actions action = new Actions(driver);
			action.moveToElement(ele);
			action.doubleClick();
			action.sendKeys(subjectID);
			action.sendKeys(Keys.ENTER);
			action.build().perform();

			rows = getWebElements(subjectMatrixRows_table);
			if (rows.size() != 0) {
				logger.log(Status.PASS, "Table cotains some records releated to search");

			} else {
				throw new Exception("unable to find the subject with id :" + subjectID);
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.log(Status.FAIL, e);
			throw e;
		}
	}

	public static void scheduleEvent(String eventName) throws Exception {
		try {
			int count = 1;
			for (WebElement webElement : rows) {
				List<WebElement> cols = webElement.findElements(By.tagName("td"));
				// System.out.println(cols);
				String local_subjectID = cols.get(getHeaderIndex("Study Subject ID") - 1).getText();
				if (local_subjectID.equals(subjectID_temp)) {
					WebElement ele = driver.findElement(By.xpath("//*[@id='findSubjects_row" + count + "']/td["
							+ getHeaderIndex(eventName) + "]/table/tbody/tr/td/a"));
		//			System.out.println(ele);
					ele.click();
					Thread.sleep(2000);
					List<WebElement> list = driver.findElements(By.linkText("Schedule"));
					//System.out.println(list.size());
					if (list.size() == 1) {
						list.get(0).click();
					} else {
						throw new Exception("Already Scheduled");
						//driver.findElement(By.linkText("View/Enter Data")).click();
					}

				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}
	}

	
	public static void EnterDataEvent(String eventName) throws Exception {
		try {
			int count = 1;
			for (WebElement webElement : rows) {
				List<WebElement> cols = webElement.findElements(By.tagName("td"));
				// System.out.println(cols);
				String local_subjectID = cols.get(getHeaderIndex("Study Subject ID") - 1).getText();
				if (local_subjectID.equals(subjectID_temp)) {
					WebElement ele = driver.findElement(By.xpath("//*[@id='findSubjects_row" + count + "']/td["
							+ getHeaderIndex(eventName) + "]/table/tbody/tr/td/a"));
	//				System.out.println(ele);
					ele.click();
					Thread.sleep(2000);
					List<WebElement> list = driver.findElements(By.linkText("View/Enter Data"));
					System.out.println(list.size());
					if (list.size() == 1) {
						list.get(0).click();
						break;
					}
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;
		}

	}
	
	
	// table[@id='findSubjects']//tbody
	public static void openSubject() throws Exception {
		boolean flag = false;
		try {
			Thread.sleep(2000);

			// driver.findElement(By.xpath("//*[@id='findSubjects_row1']/td[8]/a[1]/img")).click();
			int count = 1;
			for (WebElement webElement : rows) {
				List<WebElement> cols = webElement.findElements(By.tagName("td"));
				// System.out.println(cols);
				String local_subjectID = cols.get(getHeaderIndex("Study Subject ID") - 1).getText();
				if (local_subjectID.equals(subjectID_temp)) {
					WebElement ele = driver.findElement(By.xpath(
							"//*[@id='findSubjects_row" + count + "']/td[" + getHeaderIndex("Actions") + "]/a[1]/img"));
					// *[@id="findSubjects_row1"]/td[8]/table/tbody/tr/td/a/img
					System.out.println(ele);
					Actions actions = new Actions(driver);
					actions.moveToElement(ele).doubleClick();
					actions.build().perform();
					flag = true;
					break;
				} else {
					count++;
				}
			}

			if (flag == false) {
				throw new Exception("Subject id is not present in the table");
			}
		} catch (Exception e) {
			// TODO: handle exception
			logger.log(Status.FAIL, e);
			throw e;

		}
	}
}
