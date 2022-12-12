import * as fs from "fs";
import path from "path";

const report = {};

/**
 * creates a formated name appending the browser name at the end
 * @param {string} name
 * @param {string} browser
 * @returns the formated name
 */
export const logStart = (name, browser) => {
  const formatedName = name.trim().replace(/ /g, "_") + `_${browser}`;
  report[formatedName] = {};
  return formatedName;
};

export const logStep = (result, stepNumber, tcName) => {
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
