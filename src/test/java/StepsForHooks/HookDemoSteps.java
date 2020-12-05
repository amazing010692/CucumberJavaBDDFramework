package StepsForHooks;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;

public class HookDemoSteps {
	
	WebDriver driver = null;
	
	@Before
	public void browserSetup() {
		System.out.println(" === I am inside browserSetup === ");
		System.out.println("Inside Step - Browser is open");
		String projectPath = System.getProperty("user.dir");
		System.out.println("Project path is: " + projectPath);
		System.setProperty("webdriver.chrome.driver", projectPath + "/src/test/resources/Drivers/chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
	@Given("User is in the Login page")
	public void user_is_in_the_Login_page() {
	}

	@When("User enters username and password")
	public void user_enters_username_and_password() {
	}

	@And("click the Login button")
	public void click_the_Login_button() {
	}

	@Then("User is navigated to Home page")
	public void user_is_navigated_to_Home_page() {
	}
}
