import { By } from "selenium-webdriver";

export const Username_input = By.id("user-name");
export const Password_input = By.id("password");
export const Login_button = By.id("login-button");
export const ErrorMsgContainer = By.css(".error-message-container h3");

export const AddToCart_1 = By.xpath("//*[@class='inventory_item'][1]//button");
export const AddToCart_2 = By.xpath("//*[@class='inventory_item'][2]//button");

export const ShoppingCartIcon = By.className("shopping_cart_link");
export const Checkout_button = By.id("checkout");

export const FirstName_input = By.id("first-name");
export const LastName_input = By.id("last-name");
export const Zipcode_input = By.id("postal-code");
export const Continue_button = By.id("continue");

export const Finish_button = By.id("finish");
export const CheckoutComplete = By.id("checkout_complete_container");
export const Back_Home = By.id("back-to-products");
