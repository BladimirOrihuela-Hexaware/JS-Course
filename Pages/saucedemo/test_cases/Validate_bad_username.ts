import {
  Username_input,
  Password_input,
  Login_button,
  ErrorMsgContainer,
} from "./../elements";
import { Step } from "./../../../models/Step";
import { ThenableWebDriver } from "selenium-webdriver";
import { TestCase } from "./../../../models/TestCase";
import { takeScreenshot } from "../../../services/shared/utilities";
import { navigateToSauceDemo } from "../shared";

const ValidateBadCredentials = new TestCase(
  "Validate error message on incorrect credentials"
);

const enterCredentials = async (driver: ThenableWebDriver) => {
  const username = await driver.findElement(Username_input);
  const password = await driver.findElement(Password_input);
  const button = await driver.findElement(Login_button);

  await username.sendKeys("invalid User");
  await password.sendKeys("invalid password");
  await button.click();
  return new Step("Enter invalid credentials");
};

const validateErrorMessage = async (driver: ThenableWebDriver) => {
  const step = new Step("Error message should be displayed");
  const errorContainer = await driver.findElement(ErrorMsgContainer);
  const text = await errorContainer.getText();
  const expected =
    "Epic sadface: Username and password do not match any user in this service";
  if (text != expected) {
    step.error = new Error("text message doesnt match expected error message");
  }
  const ss = "saucedemo/validate_error.png";
  await takeScreenshot(driver, ss);
  step.screenshot = ss;
  return step;
};

ValidateBadCredentials.steps = [
  navigateToSauceDemo,
  enterCredentials,
  validateErrorMessage,
];
export default ValidateBadCredentials;
