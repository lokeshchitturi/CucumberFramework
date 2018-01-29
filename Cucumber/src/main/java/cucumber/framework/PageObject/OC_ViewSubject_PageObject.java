package cucumber.framework.PageObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.framework.helper.DropDownHelper;
import cucumber.framework.utility.ExcelUtility;
import cucumber.framework.utility.WebDriverUtility;

public class OC_ViewSubject_PageObject extends WebDriverUtility{

	/// First row is header ..... subject data starts from second row
	//*[@id='subjectEvents']/table/tbody/tr/td//div/table/tbody/tr[2]/td/table/tbody/tr
	//*[@id="subjectEvents"]/table/tbody/tr/td//div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[6]/table/tbody/tr/td[5]/table/tbody/tr/td[1]/a/img
	
	static String subjectEvents_Table="xpath://*[@id='subjectEvents']/table/tbody/tr/td//div/table/tbody/tr[2]/td/table/tbody/tr";
	
	//td[6]/---- Img is present in 6th coloumn ..5 is the index number
	static String enterData_Xpath="table/tbody/tr/td[5]/table/tbody/tr/td[2]/a/img";
	//*[@id="subjectEvents"]/table/tbody/tr/td//div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[6]/table/tbody/tr/td[5]
	//*[@id="subjectEvents"]/table/tbody/tr/td//div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[6]/table/tbody/tr/td[5]/table/tbody/tr/td[2]/a/img
	
	Map<String, Integer> subjectEventTableHeaderIndex=new HashMap<>();
	static List<WebElement> headerRow;
	static List<WebElement> rowData;
	
	static List<WebElement> rowList=new ArrayList<>();
	
	//table header elements
	static WebElement eventName;
	static WebElement startDate;
	static WebElement location;
	static WebElement status;
	static WebElement actions;
	static WebElement CRFs;
	
	//CRF webElements
	static WebElement CRFName;
	static WebElement CRFVersion;
	static WebElement CRFStatus;
	static WebElement CRFUpdated;
	static WebElement CRFActions;
	
	//Action webElements
	static WebElement ActionEnterData;
	static WebElement ActionViewDefault;
	static WebElement ActionPrintDefault;
	
	
	static Map<String, WebElement> rowWebElements=new HashMap<>();
	static List<WebElement> eventTableList=new LinkedList<>();
	static Map<String, String> excelFormList=new LinkedHashMap<String, String>();
	
	static String tempFormName="";
	
	public static void initializeObjects()
	{
		try {
			List<WebElement> list=getWebElements(subjectEvents_Table);
			
			WebElement header=list.get(0);
			
			headerRow=header.findElements(By.tagName("td"));
		/*	// rowList contains the number of rows per subject
			for(int i=1;i<list.size();i++)
			{
				rowList.add(list.get(i));
			}*/
			
			/*
			initializeRowElements(rowNumber);
			initializeCRFChildElements();
			initalizeActionChildElements();*/
			
		/*	WebElement row=list.get(1);
			
			rowData=row.findElements(By.xpath("td"));
			System.out.println(rowData.size());*/
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	public static void openForm(String formName)
	{
		try {
			eventTableList=getWebElements(subjectEvents_Table);
			WebElement header=eventTableList.get(0);
			headerRow=header.findElements(By.tagName("td"));
			System.out.println("G");
			
			//rows of a table starts from 2nd element of a list. 1st of a list is header;
			if(eventTableList.size()>1)
			{
				for(int i=1;i<eventTableList.size();i++)
				{
					initializeRowElements(i+1);
					initializeCRFChildElements();
					initalizeActionChildElements();
					System.out.println(CRFName.getText());
					if(CRFName.getText().equalsIgnoreCase(formName))
						{
							ActionEnterData.click();
							break;
						}	
				}
			}
			
			ExcelUtility.setExcelFile("D:\\OpenClinica\\Cucumber\\CRF_Design_Template_v3.9.xls", "Items");
			excelFormList=ExcelUtility.getCRFFormFieldList(formName);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	public static void initializeRowElements(int rowNumber)
	{
		String xpath="xpath://*[@id='subjectEvents']/table/tbody/tr/td//div/table/tbody/tr[2]/td/table/tbody/tr["+rowNumber+"]/";
		int count=1;
		try {
			for (WebElement webElement : headerRow) {
				String value=webElement.getText().trim();
				switch (value) {
				case "Event (Occurrence Number)":
					System.out.println(xpath+"td["+count+"]");
					eventName=getWebElement(xpath+"td["+count+"]");
					System.out.println(eventName);
					System.out.println(eventName.getText());
					count++;
					continue;
				case "Start Date":
					startDate=getWebElement(xpath+"td["+count+"]");
					count++;
					continue;
				case "Location":
					location=getWebElement(xpath+"td["+count+"]");
					count++;
					continue;
				case "Status":
					status=getWebElement(xpath+"td["+count+"]");
					count++;
					continue;
				case "Actions":
					actions=getWebElement(xpath+"td["+count+"]");
					count++;
					continue;
				case "CRFs (Name, Version, Status, Updated, Actions)":
					CRFs=getWebElement(xpath+"td["+count+"]");
					count++;
					continue;
				default:
					break;
				}
				
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	
	public static void displayRowData()
	{
		try {
			initializeRowElements(2);
			System.out.println(eventName.getText());
			System.out.println(startDate.getText());
			System.out.println(location.getText());
			System.out.println(status.getText());
			System.out.println(actions.getText());
			System.out.println(CRFs.getText());
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void initializeCRFChildElements()
	{
		String xpath="table/tbody/tr/td";
		try {
			CRFName=CRFs.findElement(By.xpath(xpath+"[1]"));
			CRFVersion=CRFs.findElement(By.xpath(xpath+"[2]"));
			CRFStatus=CRFs.findElement(By.xpath(xpath+"[3]"));
			CRFUpdated=CRFs.findElement(By.xpath(xpath+"[4]"));
			CRFActions=CRFs.findElement(By.xpath(xpath+"[5]"));
			
			/*System.out.println(CRFStatus.getText());
			System.out.println(CRFStatus.findElement(By.tagName("img")).getAttribute("title"));*/
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	public static void initalizeActionChildElements()
	{
		try {
			String xpath="table/tbody/tr/td";
			ActionEnterData=CRFActions.findElement(By.xpath(xpath+"[1]"));
			System.out.println(ActionEnterData);
			ActionViewDefault=CRFActions.findElement(By.xpath(xpath+"[1]"));
			ActionPrintDefault=CRFActions.findElement(By.xpath(xpath+"[1]"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void clickEnterDataImage() throws Exception
	{
		try {
			ActionEnterData.click();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw e;
		}
	}
	
	public static void fillForm(String formName) throws Exception
	{
		try {
			ExcelUtility.setExcelFile("D:\\OpenClinica\\Cucumber\\CRF_Design_Template_v3.9.xls", "Items");
			Map<String, String> map=ExcelUtility.getCRFFormFieldList("Form");
			int index=1;
			System.out.println(map);
			for(Map.Entry<String, String> entry:map.entrySet())
			{
				System.out.println(entry.getKey()+"-----"+entry.getValue());
	//			enterFormField(entry.getValue(), "Test", index);
				index=index+1;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		}
		
	}
	
	public static void enterFormField(String fieldNameAndValue)
	{
		String[] args=fieldNameAndValue.split(":");
		String userFieldName=args[0];
		String userFieldValue=args[1];
		String fieldType;
		int index=1;
		System.out.println(excelFormList);
		
		/*if(userFieldName.equalsIgnoreCase("Checked by date")&& userFieldName.length()==0)
		{
			System.out.println("Do nothing");
		}
		*/
		
		try {
			for (Map.Entry<String, String> entry : excelFormList.entrySet()) {
				String[] values=entry.getKey().split("_");
				String excelFieldName=values[0];
				index=Integer.valueOf(values[1]);
				if(excelFieldName.equalsIgnoreCase(userFieldName))
				{
					fieldType=entry.getValue();

					switch (fieldType) {
					case "text":
						enterTextFormField(index, userFieldValue);
						break;
					case "radio":
						clickRadioButton(index, userFieldValue);
						break;
					case "single-select":
						selectDropDownField(index, userFieldValue);
					default:
						break;
					}
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		
	}
	
	public static void enterTextFormField(int index,String userFieldValue)
	{
		try {
			System.out.println("as");
			driver.findElement(By.id("input"+index)).clear();
			driver.findElement(By.id("input"+index)).sendKeys(userFieldValue);;
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}
	
	public static void selectDropDownField(int index,String userFieldValue)
	{
		try {
			WebElement ele=driver.findElement(By.id("input"+index));
			Select select=new Select(ele);
			select.selectByVisibleText(userFieldValue);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	public static void clickRadioButton(int index,String userFieldValue)
	{
		boolean flag=false;
		System.out.println(index);
		try {
			List<WebElement> list=driver.findElements(By.id("input"+index));
			
			for (WebElement webElement : list) {
				System.out.println(webElement.getText());
				if(webElement.getAttribute("value").trim().equalsIgnoreCase(userFieldValue))
				{
					flag=true;
					webElement.click();
				}
			}
			if(flag==false)
			{
				throw new Exception("Radio button not found");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
