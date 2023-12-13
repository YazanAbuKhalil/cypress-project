import BasePage from "./BasePage";

class LoginPage extends BasePage {
    usernameInput: string = "[name='username']";
    passwordInput: string = "[name='password']";
    loginButton: string = "[type='submit']";
    APIUrl: string = "/api/v1/login";
    path: string = "/";

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

    login(username: string, password: string) {
        this.typeInput(this.usernameInput, username);
        this.typeInput(this.passwordInput, password);
        this.clickElement(this.loginButton);
    }
}
export = new LoginPage();