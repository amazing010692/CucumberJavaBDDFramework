package pagefactory;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

public class LoginPage_PF {
	
	@FindBy(xpath = "//input[@id='name']")
	@CacheLookup
	WebElement txt_username;
	
	@FindBy(xpath = "//input[@id='password']")
	WebElement txt_password;
	
	@FindBy(xpath = "//button[@id='login']")
	WebElement btn_login;
	
	@FindBy(partialLinkText = "Janielle")
	List<WebElement> myLinks;
	
	@FindBy(how = How.ID, using = "name")
	WebElement sample;
	
	WebDriver driver;
	public LoginPage_PF(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AjaxElementLocatorFactory(driver, 30), this);
	}
	
	public void enterUsername(String username) {
		txt_username.sendKeys(username);
	}
	
	public void enterPassword(String password) {
		txt_password.sendKeys(password);
	}
	
	public void clickOnLogin() {
		btn_login.click();
	}

}
