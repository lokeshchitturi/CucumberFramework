package cucumber.framework.utility;

import java.io.File;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;



public class ExtentFactory {
	public static ExtentReports extent;
	public static ExtentReports getInstance() throws Exception
	{
		try {
			
			if(extent ==null)
			{
			ExtentHtmlReporter htmlReport=new ExtentHtmlReporter(new File(System.getProperty("user.dir")+"/extent-output/ExtentReport.html"));
			htmlReport.config().setChartVisibilityOnOpen(true);
			htmlReport.config().setDocumentTitle("Automation Report");
			htmlReport.config().setReportName("Praticse automation");
			
			
			extent=new ExtentReports();
			extent.attachReporter(htmlReport);
			
			}
			
			return extent;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		}
	}

}
