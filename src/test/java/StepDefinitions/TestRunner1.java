package StepDefinitions;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features/LoginDemo.feature", 
				glue = { "StepDefinitions" }, 
				monochrome = true, 
				plugin = {
						"pretty", "junit:target/JUnitReports/report.xml", "json:target/JSONreports/report.json",
						"html:target/HTMLreports" }, 
				tags = "")

public class TestRunner1 {

}
