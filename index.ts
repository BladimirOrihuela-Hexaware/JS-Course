import { TestSet } from "./models/TestSet";
import ValidateBadCredentials from "./Pages/saucedemo/test_cases/Validate_bad_username";
import ValidateEmptyCartAfterPurchase from "./Pages/saucedemo/test_cases/Validate_Empty_cart_after_purchase";

const tc1 = ValidateBadCredentials.copyTC().setBrowser("edge");
const tc2 = ValidateEmptyCartAfterPurchase.copyTC().setBrowser("chrome");
const saucedemoTestSet = new TestSet();
saucedemoTestSet.testCases = [tc2];
saucedemoTestSet.executeTests();
