import { ThenableWebDriver } from "selenium-webdriver";
import { Step } from "../../models/Step";

export const navigateToSauceDemo = async (driver: ThenableWebDriver) => {
  await driver.get("https://www.saucedemo.com/");
  return new Step("Navigate to Sauce Demo");
};
