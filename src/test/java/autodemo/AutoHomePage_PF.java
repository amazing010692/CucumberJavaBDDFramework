package autodemo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

public class AutoHomePage_PF {
	
	@FindBy(xpath = "//a[contains(text(), 'My Account')]/@href")
	WebElement menuMyAccount; 
	
	@FindBy(xpath = "//input[@id='reg_email']")
	WebElement regEmailAddress;
	
	@FindBy(xpath = "//input[@id='reg_password']")
	WebElement regPassword;
	
	@FindBy(xpath = "//input[@value='Register']")
	WebElement buttonRegister;
	
	WebDriver driver;
	public AutoHomePage_PF(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AjaxElementLocatorFactory(driver, 30), this);
	}
	
	public void clickMyAccount() {
		menuMyAccount.click();
	}
	
	public void enterEmail(String email) {
		regEmailAddress.sendKeys(email);
	}
	
	public void enterPassword(String password) {
		regPassword.sendKeys(password);
	}
	
	public void clickRegister() {
		buttonRegister.click();
	}

}
