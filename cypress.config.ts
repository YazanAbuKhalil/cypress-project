import { defineConfig } from "cypress";
import LoginPage = require("./cypress/pages/LoginPage");

let employeeId: string;
type employee = {
  id: string,
  username: string,
  password: string
};
let employeeInfo: employee = {
  id: "",
  username: "",
  password: "",
}

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        setEmployeeId(id: string): null {
           employeeInfo.id = id;
           return null;
        },
        getEmployeeId(): string{
          return employeeInfo.id;
        },
        getEmployee(): employee {
          return employeeInfo;
        },
        setEmployee({username, password}): null {
          employeeInfo.username = username;
          employeeInfo.password = password;
          return null;
        }
      })
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    specPattern: "**/e2e/*.ts",
  },
  defaultCommandTimeout: 20000,
  responseTimeout: 120000,
});
