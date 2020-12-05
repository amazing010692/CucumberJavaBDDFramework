package pagefactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

public class HomePage_PF {
	
	@FindBy(xpath = "//button[@id='logout']")
	WebElement btn_logout;
	
	WebDriver driver;
	public HomePage_PF(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AjaxElementLocatorFactory(driver, 30), this);
	}
	
	public void checkLogoutIsDisplayed() {
		btn_logout.isDisplayed();	
	}

}
