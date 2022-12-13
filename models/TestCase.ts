import { Step } from "./Step";
import { Status } from "./Status";
import { Browser, ThenableWebDriver } from "selenium-webdriver";

const getBrowser = (browser = "chrome") => {
  switch (browser) {
    case "chrome":
      return Browser.CHROME;
    case "edge":
      return Browser.EDGE;
    default:
      return Browser.CHROME;
  }
};

export class TestCase {
  status: Status;
  name: string;
  browser: string;
  driver: ThenableWebDriver | null;
  steps: ((d: ThenableWebDriver) => Promise<Step>)[];

  constructor(name: string, browser?: string) {
    this.status = "Unexecuted";
    this.steps = [];
    this.name = name;
    this.browser = getBrowser(browser);
    this.driver = null;
  }

  copyTC() {
    const copy = new TestCase(this.name, this.browser);
    copy.steps = this.steps;
    return copy;
  }

  setBrowser(browser: string) {
    this.browser = getBrowser(browser);
    return this;
  }
}
