import LoginPage from "../pages/LoginPage";
import DashBoardPage from "../pages/DashBoardPage";
import PIMPage from "../pages/PIMPage";
import AddEmployeePage from "../pages/AddEmployeePage";
import { error } from "cypress/types/jquery";

describe("Password Validation Functionality", () => {
    beforeEach(() => {
        LoginPage.navigateTo(LoginPage.path);
        LoginPage.login();
        DashBoardPage.clickElement(DashBoardPage.PIMTab);
        PIMPage.clickElement(PIMPage.addEmployeeTab);
        AddEmployeePage.clickElement(AddEmployeePage.createLoginDetailsToggle);
    });

    it("should user type valid password when adding new employee", () => {
        cy.intercept("POST", AddEmployeePage.passwordValidationAPI,   req => {
        if(req.body["password"].length < 13) { req.reply({})} else {req.alias="setPassword"};
        })

        AddEmployeePage.typeInput(AddEmployeePage.passwordInput, "Test_auto1234", {delay: 1200});
        cy.wait("@setPassword").then(xhr => {
            const messagesList = xhr.response?.body.data.messages;
            expect(messagesList).to.be.empty;
            expect(xhr.response?.statusCode).to.be.eql(200);
            AddEmployeePage.getElement(AddEmployeePage.passwordLevel).should("have.text", "Strong ")
        });
    })
})
