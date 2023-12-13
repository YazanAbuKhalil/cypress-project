import BasePage from "./BasePage";

class AddEmployeePage extends BasePage {
    // locators
    firstNameInput = "[name='firstName']";
    middleNameInput = "[name='middleName']";
    lastNameInput = "[name='lastName']";
    createLoginDetailsToggle = ".oxd-switch-input";
    usernameInput = ":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
    passwordInput = ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input";
    confirmPasswordInput = ".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
    addProfileImageButton = ".oxd-file-div .oxd-icon-button"
    fileInput = "[type='file']";
    saveButton = ".oxd-form-actions [type='submit']";
    employeeIdInput = ".oxd-grid-2 .oxd-grid-item input";

    // variables
    profileImagePath = "/home/yazan/Desktop/cypress-app/assets/images/profilePhoto.jpg";
    tooltipSuccessMessage = "#popper_xe0107pu_zk0pe1";
    

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