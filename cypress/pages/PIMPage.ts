import BasePage from "./BasePage";

class PIMpage extends BasePage {
    addEmployeeTab: string = ".oxd-topbar-body-nav ul > :nth-child(3)";
    employeeListTab: string = ".oxd-topbar-body-nav ul > :nth-child(2)";
}
export = new PIMpage();