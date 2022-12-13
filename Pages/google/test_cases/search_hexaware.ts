import { Step } from "../../../models/Step.js";
import { TestCase } from "../../../models/TestCase.js";
import { SEARCH_BAR } from "../elements.js";
import { Key, ThenableWebDriver, until } from "selenium-webdriver";
import { takeScreenshot } from "../../../services/shared/utilities.js";

const Search_Hexaware = new TestCase("Search Hexaware in google");

// navigate to google
const navigateToGoogle = async (driver: ThenableWebDriver) => {
  const step = new Step("navigate to google");

  try {
    await driver.get("https://google.com");
  } catch (_error) {
    step.error = new Error();
    step.error.name = "Error from navigate to google";
    step.error.message = JSON.stringify(_error);
  }
  return step;
};

// type hexaware in the search box & search
const performSearch = async (driver: ThenableWebDriver) => {
  const step = new Step("type hexaware and search");
  const searchBar = await driver.findElement(SEARCH_BAR);
  await searchBar.sendKeys("Hexaware", Key.ENTER);
  return step;
};

// validate if hexaware word exist in title page
const validateTitle = async (driver: ThenableWebDriver) => {
  const step = new Step("Validate title");
  await driver.wait(until.titleContains("Hexaware"), 5000);
  const imageName = "google/validate_title.png";
  await takeScreenshot(driver, imageName);
  step.screenshot = imageName;
  return step;
};

Search_Hexaware.steps = [navigateToGoogle, performSearch, validateTitle];
export default Search_Hexaware;
