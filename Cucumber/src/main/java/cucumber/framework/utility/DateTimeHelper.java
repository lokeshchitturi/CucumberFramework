package cucumber.framework.utility;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


public class DateTimeHelper {

	
	public static String getCurrentDateTime()
	{
		SimpleDateFormat sdt=new SimpleDateFormat("_MM-dd-yyyy-hh-mm-ss");
		Calendar cal=Calendar.getInstance();	
		String time=""+sdt.format(cal.getTime());
	//	System.out.println(time);
		return time;
	}
	
	public static String getCurrentDate()
	{
		return getCurrentDateTime().substring(0, 11);
	}
	
	public static void main(String[] args) {
		System.out.println(getCurrentDate());
		System.out.println(getCurrentDateTime());
		System.out.println(new Date());
	}
}
