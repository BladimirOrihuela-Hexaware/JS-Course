import { executeTestsEngine } from "../services/execution/driver_execution.js";

export class TestSet {
  constructor(receivedTests) {
    this.testCases = this.initializeTests(receivedTests);
    this.parallel = true;
  }

  initializeTests(receivedTests) {
    if (receivedTests == undefined) {
      this.testCases = [];
    } else {
      this.testCases = receivedTests;
    }
  }

  executeTests() {
    executeTestsEngine(this.parallel, this.testCases);
  }
}
