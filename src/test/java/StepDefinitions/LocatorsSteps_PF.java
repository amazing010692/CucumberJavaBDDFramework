package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import autodemo.AutoHomePage_PF;
import autodemo.AutoResultsPage_PF;
import io.cucumber.java.en.*;

public class LocatorsSteps_PF {
	
	WebDriver driver = null;
	AutoHomePage_PF register;
	AutoResultsPage_PF results;
	
	@Given("Chrome Browser is open")
	public void chrome_Browser_is_open() {
		System.out.println(" === I am inside LocatorsSteps_PF class === ");
		System.out.println("Inside Step - Browser is open");
		String projectPath = System.getProperty("user.dir");
		System.out.println("Project path is: " + projectPath);
		System.setProperty("webdriver.chrome.driver", projectPath + "/src/test/resources/Drivers/chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);

	}

	@And("I am in the Home page of the Automation Practice Site")
	public void i_am_in_the_Home_page_of_the_Automation_Practice_Site() {
		driver.navigate().to("http://practice.automationtesting.in/");

	}

	@When("I click the My Account menu")
	public void i_click_the_My_Account_menu() {
		register = new AutoHomePage_PF(driver);
		register.clickMyAccount();

	}

	@And("^I enter (.*) and (.*) in the Registration section$")
	public void I_enter_username_and_password_in_the_Registration_section(String email, String password) {
		register.enterEmail(email);
		register.enterPassword(password);

	}
	
	@And("I click the Register button")
	public void I_click_the_Register_button() {
		register.clickRegister();

	}

	@Then("I will be redirected to the Welcome page")
	public void i_will_be_redirected_to_the_Welcome_page() {
		results = new AutoResultsPage_PF(driver);
		driver.getPageSource().contains("From your account dashboard");

	}

	@And("I can verify the presence of locators")
	public void i_can_verify_the_presence_of_locators() {
		results.verifyEmailField();
		results.verifySubscribeButton();
		results.verifyLinkDownloads();
		results.verifyLinkAddresses();
		results.verifyLinkAccountDetails();
		results.verifyLogout();
		
		results.clickSignOut();

		driver.close();
		driver.quit();

	}

}
