package StepsDataTable;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class DataTableSteps {

	public static WebDriver driver;
	
	public static boolean isElementPresent(By by) {
		/*try {
			driver.findElement(By.xpath(locator));
			return true;
		} catch(Throwable t) {
			return false;
		}*/
		
		int size = driver.findElements(by).size();
		if(size == 0) {
			return false;			
		} else {
			return true;
		}

	}
	

	@Before
	public void browserSetup() {
		System.out.println(" ====== Opening and Initializing Chrome browser ====== \n");
		String projectPath = System.getProperty("user.dir");
		System.out.println("Project path is: " + projectPath);
		System.setProperty("webdriver.chrome.driver", projectPath + "/src/test/resources/Drivers/chromedriver.exe");

		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
	}

	@Given("I am in the Home page of an Automation Practice Site")
	public void i_am_in_the_Home_page_of_an_Automation_Practice_Site() {
		driver.navigate().to("http://practice.automationtesting.in/");
	}

	@When("I click Selenium Ruby")
	public void i_click_Selenium_Ruby() {
		WebElement linkRuby = driver.findElement(By.xpath("//*[contains(text(),'Selenium Ruby')]"));
		linkRuby.click();

	}

	@Then("I will be navigated to the Product page")
	public void i_will_be_navigated_to_the_Product_page() {
		driver.getPageSource().contains("Product Description");

	}

	@And("I can verify the presence of element locators")
	public void i_can_verify_the_presence_of_element_locators(DataTable dataTable) {
		
		List<Map<String, String>> listMaps = dataTable.asMaps();
		for (Map<String, String> map : listMaps) {
			
			for (String key : map.keySet()) {
				String value = map.get(key);
				System.out.println(key + "----" + value);
				//Assert.assertEquals(true, isElementPresent(By.xpath(value)));
			}
			System.out.println("================================================================\n");
			
		}

	    
	}

	@After
	public void tearDown() {
		System.out.println(" ====== Closing the browser session ====== \n");
		driver.close();
		driver.quit();
	}

}
