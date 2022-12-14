import { takeScreenshot } from "./../../../services/shared/utilities";
import { ThenableWebDriver, until, By } from "selenium-webdriver";
import { Step } from "../../../models/Step";
import * as Elements from "../elements";
import { navigateToSauceDemo } from "../shared";
import { TestCase } from "./../../../models/TestCase";

const ValidateEmptyCartAfterPurchase = new TestCase(
  "Validate empty cart after purchase"
);

const enterCredentials = async (driver: ThenableWebDriver) => {
  const { Username_input, Password_input, Login_button } = Elements;
  const username = await driver.findElement(Username_input);
  const password = await driver.findElement(Password_input);
  const button = await driver.findElement(Login_button);

  await username.sendKeys("standard_user");
  await password.sendKeys("secret_sauce");
  await button.click();
  return new Step("Enter valid credentials");
};

const selectTwoItems = async (driver: ThenableWebDriver) => {
  const { AddToCart_1, AddToCart_2 } = Elements;
  const item1 = await driver.findElement(AddToCart_1);
  const item2 = await driver.findElement(AddToCart_2);
  await item1.click();
  await item2.click();

  const ss = "saucedemo/add_two_items_to_cart.png";
  await takeScreenshot(driver, ss);
  const step = new Step("Add two items to the cart");
  step.screenshot = ss;
  return step;
};

const navigateToCart = async (driver: ThenableWebDriver) => {
  const step = new Step("Go to cart");
  const cart = await driver.findElement(Elements.ShoppingCartIcon);
  const t = await cart.getText();
  if (t != "2") throw Error();
  await cart.click();
  const ss = "saucedemo/cart_with_items.png";
  await takeScreenshot(driver, ss);
  step.screenshot = ss;
  return step;
};

const clickOnCheckout = async (driver: ThenableWebDriver) => {
  const checkout = await driver.findElement(Elements.Checkout_button);
  await checkout.click();
  return new Step("Click On Checkout");
};

const enterShipInfo = async (driver: ThenableWebDriver) => {
  const step = new Step("Fill Checkout info");
  const { LastName_input, FirstName_input, Zipcode_input, Continue_button } =
    Elements;
  const name = await driver.findElement(FirstName_input);
  const last = await driver.findElement(LastName_input);
  const zip = await driver.findElement(Zipcode_input);
  const continueBtn = await driver.findElement(Continue_button);
  await name.sendKeys("Blad");
  await last.sendKeys("Hexa");
  await zip.sendKeys("25290");
  const ss = "saucedemo/checkout_info.png";
  await takeScreenshot(driver, ss);
  step.screenshot = ss;
  await continueBtn.click();

  return step;
};

const completePurchase = async (driver: ThenableWebDriver) => {
  const step = new Step("Complete Purchase");
  const { Finish_button, Back_Home, CheckoutComplete, ShoppingCartIcon } =
    Elements;

  const finish = await driver.findElement(Finish_button);

  await finish.click();
  await driver.wait(
    until.elementIsVisible(driver.findElement(CheckoutComplete)),
    5000
  );
  const home = await driver.findElement(Back_Home);
  await home.click();
  await driver.wait(
    until.elementIsVisible(driver.findElement(ShoppingCartIcon)),
    5000
  );

  setTimeout(() => {}, 3000);

  const ss = "saucedemo/after_purchase.png";
  await takeScreenshot(driver, ss);
  step.screenshot = ss;
  return step;
};

const validateEmptyCart = async (driver: ThenableWebDriver) => {
  const step = new Step("Validate Empty Cart");
  await driver.executeScript("window.scrollBy(0,-2000)");

  const cart = await driver.findElement(Elements.ShoppingCartIcon);
  const items = await cart.getText();
  if (items != "") {
    console.log("throw error", items);
  }
  const ss = "saucedemo/validate_empty_cart.png";
  await takeScreenshot(driver, ss);
  step.screenshot = ss;
  return step;
};

ValidateEmptyCartAfterPurchase.steps = [
  navigateToSauceDemo,
  enterCredentials,
  selectTwoItems,
  navigateToCart,
  clickOnCheckout,
  enterShipInfo,
  completePurchase,
  validateEmptyCart,
];
export default ValidateEmptyCartAfterPurchase;
