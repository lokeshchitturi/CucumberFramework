package cucumber.framework.PageObject;

import org.openqa.selenium.WebElement;

import cucumber.framework.helper.AlertHelper;
import cucumber.framework.helper.TestBase;

public class OC_CRFForm_PageObject extends TestBase{
	
	static String save_button="xpath://input[@value='Save']";
	static String exit_button="xpath://input[@value='Exit']";
	static String markComplete_checkbox="id:markCompleteId";
	
	public static void checkMarkComplete() throws Exception
	{
		try {
			WebElement element=getWebElement(markComplete_checkbox);
			if(!element.isSelected())
			{
				element.click();
				AlertHelper.acceptAlert();
			}
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}
	
	public static void clickSaveButton() throws Exception
	{
		try {
			getWebElement(save_button).click();
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}
	
	public static void clickExitButton() throws Exception
	{
		try {
			getWebElement(exit_button).click();
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}
	
	

}
