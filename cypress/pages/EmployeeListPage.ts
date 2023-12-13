import BasePage from "./BasePage";

class EmployeeListPage extends BasePage {
    employeeIdInput: string = ".oxd-form-row .oxd-grid-4 > :nth-child(2) input";
    searchButton: string = "[type='submit']";
    employeeIdField: string = ".oxd-table-body .oxd-table-row > :nth-child(2) div";

    searchEmployee(id="1111") {
        this.getElement(this.employeeIdInput).type(id);
        this.clickElement(this.searchButton);
    }
}
export = new EmployeeListPage();
