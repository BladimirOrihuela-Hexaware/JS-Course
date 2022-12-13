import { Status } from "./Status";
export class Step {
  description: string;
  status: Status;
  error?: Error;
  screenshot?: string;

  constructor(desc: string) {
    this.description = desc;
    this.status = "Unexecuted";
  }
}
