import { TestCase } from "./TestCase";
import { executeTestsEngine } from "../services/execution/driver_execution.js";

export class TestSet {
  testCases: TestCase[];
  parallel: boolean;

  constructor(receivedTests: TestCase[]) {
    this.testCases = this.initializeTests(receivedTests);
    this.parallel = true;
  }

  initializeTests(receivedTests: TestCase[]) {
    if (receivedTests == undefined) {
      return [];
    } else {
      return receivedTests;
    }
  }

  executeTests() {
    executeTestsEngine(this.parallel, this.testCases);
  }
}
