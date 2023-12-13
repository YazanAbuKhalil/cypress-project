import BasePage from "./BasePage";

class DashBoardPage extends BasePage {
    path: string = "/dashboard/index";
    PIMTab: string = "[href='/web/index.php/pim/viewPimModule']";
    dropdownMenue: string = ".oxd-userdropdown-tab";
    logoutButton: string = ".oxd-dropdown-menu > :last-child";

    logout() {
        this.clickElement(this.dropdownMenue);
        this.clickElement(this.logoutButton);
    }
}
export = new DashBoardPage();