import BasePage from "./BasePage";

class AddEmployeePage extends BasePage {
    // locators
    firstNameInput: string = "[name='firstName']";
    middleNameInput: string = "[name='middleName']";
    lastNameInput: string = "[name='lastName']";
    createLoginDetailsToggle: string = ".oxd-switch-input";
    usernameInput: string = ":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
    passwordInput: string = ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input";
    confirmPasswordInput: string = ".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
    AddProfileImageButton: string = ".oxd-file-div .oxd-icon-button"
    fileInput: string = "[type='file']";
    saveButton: string = ".oxd-form-actions [type='submit']";
    employeeIdInput: string = ".oxd-grid-2 .oxd-grid-item input";

    // variables
    profileImagePath: string = "/home/yazan/Desktop/cypress-app/assets/images/profilePhoto.jpg";
    tooltipSuccessMessage: string = "#popper_xe0107pu_zk0pe1";
    

    fillFormAndSubmit(userName: string, password: string) {
        this.typeInput(this.firstNameInput, "test-FirstName");
        this.typeInput(this.middleNameInput, "test-middleName");
        this.typeInput(this.lastNameInput, "test-LastName");
        this.clickElement(this.createLoginDetailsToggle);
        this.typeInput(this.usernameInput, userName);
        this.typeInput(this.passwordInput, password);
        this.typeInput(this.confirmPasswordInput, password);
        this.getElement(this.fileInput).selectFile(this.profileImagePath, {force: true});
        this.clickElement(this.saveButton);
    }
}
export = new AddEmployeePage();