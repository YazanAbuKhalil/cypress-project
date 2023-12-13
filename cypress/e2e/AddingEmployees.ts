import AddEmployeePage from "../pages/AddEmployeePage";
import DashBoardPage from "../pages/DashBoardPage";
import LoginPage from "../pages/LoginPage";
import PIMPage from "../pages/PIMPage";
import EmployeeListPage from "../pages/EmployeeListPage";
import PersonalDetailsPage from "../pages/PersonalDetailsPage";

describe("Adding New Employee Functionality", () => {
  describe("Add New Employee With Admin User", () => {
    beforeEach(() => {
      LoginPage.navigateTo(LoginPage.path);
      LoginPage.login();
    });

    it("should admin can adding a new employee to the system succussfully", () => {
      LoginPage.navigateTo(DashBoardPage.path);
      DashBoardPage.clickElement(DashBoardPage.PIMTab);
      PIMPage.clickElement(PIMPage.AddEmployeeTab);
      AddEmployeePage.getElement(AddEmployeePage.employeeIdInput)
        .invoke("val")
        .then((id) => cy.task("setEmployeeId", id));
      cy.task("setEmployee", {
        username: AddEmployeePage.getRandomUserName(),
        password: AddEmployeePage.getRandomPassword(),
      });
      cy.task("getEmployee").then((employeeInfo: any) => {
        AddEmployeePage.fillFormAndSubmit(
          employeeInfo.username,
          employeeInfo.password
        );
      });
      cy.url().should("contain", PersonalDetailsPage.path);
    });

    it("should find the new added employee in the employee list", () => {
      DashBoardPage.clickElement(DashBoardPage.PIMTab);
      PIMPage.clickElement(PIMPage.employeeListTab);
      cy.task("getEmployeeId").then((employeeId: any) => {
        EmployeeListPage.getElement(EmployeeListPage.employeeIdInput).type(
          employeeId
        );
        EmployeeListPage.clickElement(EmployeeListPage.searchButton);
        EmployeeListPage.getElement(EmployeeListPage.employeeIdField)
          .should("be.visible")
          .and("contain", employeeId);
      });
    });
  });

  describe("New Employee Login", () => {
    it("should login credentials for new employee to be valid", () => {
      cy.task("getEmployee").then((employeeInfo: any) => {
        LoginPage.navigateTo("/");
        LoginPage.login(employeeInfo.username, employeeInfo.password);
        cy.url().should("contain", DashBoardPage.path);
      });
    });
  });
});
