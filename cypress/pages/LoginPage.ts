import BasePage from "./BasePage";

class LoginPage extends BasePage {
    usernameInput = "[name='username']";
    passwordInput = "[name='password']";
    loginButton = "[type='submit']";
    APIUrl = "/api/v1/login";
    path = "/";

    loginAPI() {
        return cy.request({
            url: this.APIUrl,
            method: "POST",
            body: {
                username: "Admin",
                password: "admin123"
            }
        })
    }

    login(username: string = Cypress.env("username"), password: string = Cypress.env("password")) {
        this.typeInput(this.usernameInput, username);
        this.typeInput(this.passwordInput, password);
        this.clickElement(this.loginButton);
    }
}

export = new LoginPage();