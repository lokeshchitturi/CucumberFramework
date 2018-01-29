package cucumber.framework.utility;

import java.io.File;
import java.io.FileInputStream;
import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;



public class ExcelUtility {
	
	private static HSSFWorkbook ExcelWbook;
	private static HSSFSheet ExcelWsheet;
	private static HSSFRow row;
	private static HSSFCell cell;
	
	
	
	
	public static void setExcelFile(String path,String sheetName) throws Exception
	{
		try {
			FileInputStream fis=new FileInputStream(new File(path));
			
			ExcelWbook=new HSSFWorkbook(fis);
			ExcelWsheet=ExcelWbook.getSheet(sheetName);
			
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}
	
	public static int getColoumnIndex(String coloumnName) throws Exception
	{
		HSSFRow headerRow=ExcelWsheet.getRow(0);
		//System.out.println(headerRow.getCell(0).getStringCellValue());
		boolean flag=false;
		int count=0;
		for (Cell cell : headerRow) {
			if(cell.getStringCellValue().equalsIgnoreCase(coloumnName))
			{
				flag=true;
				break;
			}
			count++;
		}
		if(flag==false)
			throw new Exception("Coloumn not found");
			
		return count;
	}
	
	//this method return map contains the list of fields associated to the form. forName is caseInsenstive
	public static Map<String, String> getCRFFormFieldList(String formName) throws Exception
	{
		
		Map<String, String> map=new LinkedHashMap<>();
		boolean flag=false;
		
		for (Row row : ExcelWsheet) {	
			if(row.getRowNum()==0)
				continue;
			String CRFFormName=row.getCell(getColoumnIndex("SECTION_LABEL*")).getStringCellValue();
			if(CRFFormName.equalsIgnoreCase(formName))
			{
				flag=true;
				String fieldName=row.getCell(getColoumnIndex("DESCRIPTION_LABEL*")).getStringCellValue();
				String filedType=row.getCell(getColoumnIndex("RESPONSE_TYPE*")).getStringCellValue();
				map.put(fieldName+"_"+row.getRowNum(), filedType);
			}
		}
		if(flag==false)
			throw new Exception("CRF Form name not found in the excel");
		System.out.println(map);
		return map;
	}
	
	
	public static void main(String[] args) {
		try {
			setExcelFile("D:\\OpenClinica\\Cucumber\\CRF_Design_Template_v3.9.xls", "Items");
			Map<String, String> map=getCRFFormFieldList("Form");
			for(Map.Entry<String, String> entry:map.entrySet())
			{
				System.out.println(entry.getKey()+"-----"+entry.getValue());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	

}
