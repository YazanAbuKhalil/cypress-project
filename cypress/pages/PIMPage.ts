import BasePage from "./BasePage";

class PIMpage extends BasePage {
    addEmployeeTab = ".oxd-topbar-body-nav ul > :nth-child(3)";
    employeeListTab = ".oxd-topbar-body-nav ul > :nth-child(2)";
}
export = new PIMpage();
