import BasePage from "./BasePage";

class EmployeeListPage extends BasePage {
    employeeIdInput = ".oxd-form-row .oxd-grid-4 > :nth-child(2) input";
    searchButton = "[type='submit']";
    employeeIdField = ".oxd-table-body .oxd-table-row > :nth-child(2) div";

    searchEmployee(id="1111") {
        this.getElement(this.employeeIdInput).type(id);
        this.clickElement(this.searchButton);
    }
}
export = new EmployeeListPage();
