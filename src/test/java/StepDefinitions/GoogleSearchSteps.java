package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;

public class GoogleSearchSteps {

//	WebDriver driver = null;
//
//	@Given("Browser is open")
//	public void browser_is_open() {
//		System.out.println("Inside Step - Browser is open");
//		String projectPath = System.getProperty("user.dir");
//		System.out.println("Project path is: " + projectPath);
//		System.setProperty("webdriver.chrome.driver", projectPath + "/src/test/resources/Drivers/chromedriver.exe");
//				
//		driver = new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
//	}
//
//	@And("User is in Google Search page")
//	public void user_is_in_Google_Search_page() {
//		System.out.println("Inside Step - User is in Google Search page");
//		driver.navigate().to("https://www.google.com/");
//
//	}
//
//	@When("User enters a text in Search box")
//	public void user_enters_a_text_in_Search_box() {
//		System.out.println("Inside Step - User enters a text in Search box");
//		driver.findElement(By.xpath("//input[@name='q']")).sendKeys("Grey's Anatomy");
//	}
//
//	@And("Hits Enter")
//	public void hits_Enter() {
//		System.out.println("Inside Step - Hits Enter");
//		driver.findElement(By.xpath("//input[@name='q']")).sendKeys(Keys.ENTER);
//	}
//
//	@Then("User is navigated to Search Results")
//	public void user_is_navigated_to_Search_Results() {
//		System.out.println("Inside Step - User is navigated to Search Results");
//		driver.getPageSource().contains("Grey's Anatomy - Wikipedia");
//		driver.close();
//		driver.quit();
//	}

}
