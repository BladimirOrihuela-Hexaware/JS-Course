import { Step } from "./../../models/Step";
import { Status } from "./../../models/Status";
import * as fs from "fs";
import path from "path";

interface Report {
  [testName: string]: {
    [stepNumber: string]: {
      description: string;
      status: Status;
      screenshot?: string;
    };
  };
}

const report: Report = {};

/**
 * creates a formated name appending the browser name at the end
 * @param {string} name
 * @param {string} browser
 * @returns the formated name
 */
export const logStart = (name: string, browser: string) => {
  const formatedName = name.trim().replace(/ /g, "_") + `_${browser}`;
  report[formatedName] = {};
  return formatedName;
};

export const logStep = (result: Step, stepNumber: number, tcName: string) => {
  const { description, status, screenshot } = result;
  const formatedStepName = `step_${stepNumber}`;
  report[tcName][formatedStepName] = {
    description: description,
    status: status,
  };
  if (screenshot != undefined && screenshot != null) {
    report[tcName][formatedStepName].screenshot = screenshot;
  }
};

export const generateReport = () => {
  const reportName = generateReportName();
  const filePath = path.join("./services/report/executions", reportName);
  fs.writeFile(filePath, JSON.stringify(report), (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(filePath);
    }
  });
};

const generateReportName = () => {
  const now = new Date();
  return `execution_${now.getFullYear()}_${
    now.getMonth() + 1
  }_${now.getDate()}_${now.getHours()}_${now.getMinutes()}_${now.getSeconds()}.json`;
};
