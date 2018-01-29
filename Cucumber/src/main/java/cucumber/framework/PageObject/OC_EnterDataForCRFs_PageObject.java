package cucumber.framework.PageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.framework.utility.ExcelUtility;
import cucumber.framework.utility.WebDriverUtility;

public class OC_EnterDataForCRFs_PageObject extends WebDriverUtility{
	
	static String CRFsEvent_table="xpath://table[2]/tbody/tr/td[2]/div[3]//div/table/tbody";
	
	static WebElement CRFTableHeaderRow;
	static List<WebElement> CRFTableRows;
	static List<WebElement> rowActions;
	
	private static void initializeCRFTable() throws Exception
	{
		try {
			WebElement ele=getWebElement(CRFsEvent_table);
			CRFTableRows=ele.findElements(By.xpath("tr"));
			System.out.println(CRFTableRows.size());
			CRFTableHeaderRow=CRFTableRows.get(0);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}

	public static void findFormAndOpen(String formname) throws Exception
	{
		try {
			initializeCRFTable();
			System.out.println(CRFTableRows.size());
			
			for(int i=1;i<=CRFTableRows.size();i++)
			{
				
				List<WebElement> coloumnData=CRFTableRows.get(i).findElements(By.xpath("td"));
				
				String actualFormName=coloumnData.get(0).getText();
				System.out.println(actualFormName);
				if(actualFormName.trim().equalsIgnoreCase(formname))
				{	
					WebElement ele=coloumnData.get(5);
					rowActions=ele.findElements(By.xpath("table/tbody/tr//img"));
					System.out.println(rowActions.size());
					//performAction("Enter Data");
					rowActions.get(0).click();
					System.out.println("a");
					break;
				}
			}
	
			ExcelUtility.setExcelFile("D:\\OpenClinica\\Cucumber\\CRF_Design_Template_v3.9.xls", "Items");
			OC_ViewSubject_PageObject.excelFormList=ExcelUtility.getCRFFormFieldList(formname);
			///tbody/tr[2]/td[6]/table/tbody/tr/td[1]/a/img
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}
	
	
	public static void performAction(String actionName) throws Exception
	{
		
		try {
			for (WebElement webElement : rowActions) {
		
				actionName="Continue Entering Data";
				String actualActionName=webElement.getAttribute("alt");
				System.out.println(actualActionName);
				switch (actionName) {
				case "Enter Data":
					if(actualActionName.equalsIgnoreCase(actionName))
					{
						webElement.click();
						break;
					}
			
				case "Continue Entering Data":
					if(actualActionName.equalsIgnoreCase(actionName))
					{
						webElement.click();
						break;
					}
				case "View Data":
					if(actualActionName.equalsIgnoreCase(actionName))
					{
						webElement.click();
						break;
					}
				case "Print":
					if(actualActionName.equalsIgnoreCase(actionName))
					{
						webElement.click();
						break;
					}
				case "Remove":
					if(actualActionName.equalsIgnoreCase(actionName))
					{
						webElement.click();
						break;
					}
				case "Delete":
					if(actualActionName.equalsIgnoreCase(actionName))
					{
						webElement.click();
						break;
					}
				case "Reassign CRF to a New Version":	
					if(actualActionName.equalsIgnoreCase(actionName))
					{
						webElement.click();
						break;
					}
				default:
					throw new Exception("Action button not found");
				}
				
					
			}
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}
}
