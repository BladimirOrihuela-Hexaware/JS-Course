import * as fs from "fs/promises";
import { ThenableWebDriver } from "selenium-webdriver";

export const takeScreenshot = async (
  driver: ThenableWebDriver,
  path: string
) => {
  const image = await driver.takeScreenshot();
  await fs.writeFile(`./screenshots/${path}`, image, "base64");
};
