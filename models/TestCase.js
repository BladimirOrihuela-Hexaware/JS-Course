import { Browser } from "selenium-webdriver";

const getBrowser = (browser) => {
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
  constructor(name, browser) {
    this.status = "unexecuted";
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

  setBrowser(browser) {
    this.browser = getBrowser(browser);
    return this;
  }
}
