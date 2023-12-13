import BasePage from "./BasePage";

class DashBoardPage extends BasePage {
    path = "/dashboard/index";
    PIMTab = "[href='/web/index.php/pim/viewPimModule']";
    dropdownMenue = ".oxd-userdropdown-tab";
    logoutButton = ".oxd-dropdown-menu > :last-child";
}

export = new DashBoardPage();