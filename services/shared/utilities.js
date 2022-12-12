import * as fs from "fs/promises";

export const takeScreenshot = async (driver, path) => {
  let image = await driver.takeScreenshot();
  await fs.writeFile(`./screenshots/${path}`, image, "base64");
};
