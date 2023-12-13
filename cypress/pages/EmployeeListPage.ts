import BasePage from "./BasePage";

class EmployeeListPage extends BasePage {
  employeeIdInput = ".oxd-form-row .oxd-grid-4 > :nth-child(2) input";
  searchButton = "[type='submit']";
  employeeIdField = ".oxd-table-body .oxd-table-row > :nth-child(2) div";
}
export = new EmployeeListPage();
