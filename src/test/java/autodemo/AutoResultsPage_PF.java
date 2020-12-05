package autodemo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

public class AutoResultsPage_PF {
	
	@FindBy(xpath = "//input[@name='EMAIL']")
	WebElement emailField;
	
	@FindBy(xpath = "//input[@value='Subscribe']")
	WebElement subscribeButton;
	
	@FindBy(xpath = "//a[contains(text(), 'Dashboard')]/@href")
	WebElement linkDashboard;
	
	@FindBy(xpath = "//a[contains(text(), 'Orders')]/@href")
	WebElement linkOrders;
	
	@FindBy(xpath = "//a[contains(text(), 'Downloads')]/@href")
	WebElement linkDownloads;
	
	@FindBy(xpath = "//a[contains(text(), 'Addresses')]/@href")
	WebElement linkAddresses;
	
	@FindBy(xpath = "//a[contains(text(), 'Account Details')]/@href")
	WebElement linkAccountDetails;
	
	@FindBy(xpath = "//a[contains(text(), 'Logout')]/@href")
	WebElement linkLogout;
	
	@FindBy(xpath = "//a[contains(text(), 'Sign out')]/@href")
	WebElement signOut;
	
	WebDriver driver;
	public AutoResultsPage_PF(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AjaxElementLocatorFactory(driver, 30), this);
	}
	
	public void verifyEmailField() {
		emailField.isDisplayed();
	}
	
	public void verifySubscribeButton() {
		subscribeButton.isDisplayed();
	}
	
	public void verifylinkDashboard() {
		linkDashboard.isDisplayed();
	}
	
	public void verifyLinkOrders() {
		linkOrders.isDisplayed();
	}
	
	public void verifyLinkDownloads() {
		linkDownloads.isDisplayed();
	}
	
	public void verifyLinkAddresses() {
		linkAddresses.isDisplayed();
	}
	
	public void verifyLinkAccountDetails() {
		linkAccountDetails.isDisplayed();
	}
	
	public void verifyLogout() {
		linkLogout.isDisplayed();
	}
	
	public void clickSignOut() {
		signOut.click();
	}

}
