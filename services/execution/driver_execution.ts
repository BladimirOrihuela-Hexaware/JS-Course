import { TestCase } from "./../../models/TestCase";
import { Builder } from "selenium-webdriver";
import { generateReport, logStart, logStep } from "../report/log.js";

let testIDs = [];
let executedIDs = [];

export const executeTestsEngine = async (
  isParallel: boolean,
  tests: TestCase[]
) => {
  testIDs = tests.map((test, index) => index);

  if (isParallel) {
    tests.forEach((test, index) => {
      executeTest(test, index);
    });
  } else {
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      await executeTest(test, i);
    }
  }
};

const executeTest = async (test: TestCase, index: number) => {
  const { name, browser, steps } = test;
  let { driver } = test;

  const formatedName = logStart(name, browser);
  if (driver == null) {
    driver = new Builder().forBrowser(browser).build();
  }

  try {
    for (let index = 0; index < steps.length; index++) {
      const step = steps[index];
      const result = await step(driver);
      if (result.error != null) {
        throw result.error;
      }
      result.status = "Passed";
      logStep(result, index + 1, formatedName);
    }
  } catch (error) {
    console.log("we have an error", error);
  } finally {
    if (driver != null) {
      driver.close();
    }
    executedIDs.push(index);
    checkAllTestExecuted();
  }
};

const checkAllTestExecuted = () => {
  if (testIDs.length == executedIDs.length) {
    //All tests are done
    generateReport();
  } else {
    console.log("Missing tests to finish");
  }
};
