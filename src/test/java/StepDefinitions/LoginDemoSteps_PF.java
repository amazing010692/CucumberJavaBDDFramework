package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;
import pagefactory.HomePage_PF;
import pagefactory.LoginPage_PF;

public class LoginDemoSteps_PF { 

//	WebDriver driver = null;
//	LoginPage_PF login;
//	HomePage_PF home;
//
//	@Given("Browser is open")
//	public void browser_is_open() {
//		System.out.println(" === I am inside LoginDemoSteps_PF class === ");
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
//	@And("User is in Login Page")
//	public void user_is_in_Login_Page() {
//		driver.navigate().to("https://example.testproject.io/web/");
//
//	}
//
//	@When("^User enters (.*) and (.*)$")
//	public void user_enters_username_and_password(String username, String password) {
//		login = new LoginPage_PF(driver);
//		login.enterUsername(username);
//		login.enterPassword(password);
//		
////		driver.findElement(By.xpath("//input[@id='name']")).sendKeys(username);
////		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
//
//	}
//	
//	@And("User clicks the Login button")
//	public void user_clicks_the_Login_button() {
//		login.clickOnLogin();
//		
////		driver.findElement(By.xpath("//button[@id='login']")).click();
//
//	}
//
//	@Then("User is navigated to Home page")
//	public void user_is_navigated_to_Home_page() {
//		home = new HomePage_PF(driver);
//		home.checkLogoutIsDisplayed();
//		
////		driver.findElement(By.xpath("//button[@id='logout']")).isDisplayed();
//		
//		driver.close();
//		driver.quit();
//
//	}

}
