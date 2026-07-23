import { basePage } from "../core/basePage";
import { expect } from "@playwright/test";
import { SideMenu } from "../components/SideMenu";
import { WebTable } from "../components/WebTable";
export class Admin extends basePage {

    constructor(page) {
        super(page);
        this.sidemenu = new SideMenu(page);
        this.webTable = new WebTable(page);

        // Buttons
        this.searchBtn = page.locator(".oxd-button[type='submit']");
        this.resetBtn = page.locator(".oxd-button[type='button']").first();
        this.addBtn = page.getByRole("button", { name: "Add" });
        this.cancelAdd = page.locator(".oxd-button[type='button']");
        this.saveAdd = page.locator(".oxd-button[type='submit']");

        // Add User Locators
        this.userRole = page.locator(".oxd-select-text").nth(0);
        this.status = page.locator(".oxd-select-text").nth(1);

        this.employeeName = page.locator("input[placeholder='Type for hints...']");

        this.userName = page.locator(".oxd-input").nth(1);

        this.password = page.locator("input[type='password']").nth(0);
        this.confirmPassword = page.locator("input[type='password']").nth(1);

        // Search Locators
        this.searchUsername = page.locator("input.oxd-input").nth(1);

        this.searchUserRole = page.locator("div.oxd-select-text-input").first();

        this.searchEmployeeName = page.locator("input[placeholder='Type for hints...']");
        this.searchStatus = page.locator("div.oxd-select-text").last();
    }


    async openAdminPage() {

    //Navigation to admin page
    async openAdminPage() 
    {

        await this.sidemenu.menuSearch("Admin");
        await this.sidemenu.openAdmin();
    }

      async addUser()
    {
        await this.click(this.addBtn);
    }

    async addUserRole(role)
    {
        await this.click(this.userRole);
        await this.page.getByRole("option", { name: role }).click();
    }

    async addEmployeeName(employeeName) {

        await this.click(this.employeeName);

        await this.employeeName.pressSequentially(employeeName, {
            delay: 80
        });

        const option = this.page.locator(".oxd-autocomplete-option");

        await option.first().waitFor({
            state: "visible"
        });

        await option.first().click();
    }

    async addStatus(status) {
        await this.click(this.status);
        await this.page.getByRole("option", { name: status }).click();
    }

    async addUserName(username) {
        await this.fill(this.userName, username);
    }

    async addPassword(password) {
        await this.fill(this.password, password);
    }

    async addConfirmPassword(confirmPassword) {
        await this.fill(this.confirmPassword, confirmPassword);
    }

    async addNewUser(user) {

        await this.addUserRole(user.role);

        await this.addEmployeeName(user.employeeName);

        await this.addStatus(user.status);

        await this.addUserName(user.username);

        await this.addPassword(user.password);

        await this.addConfirmPassword(user.confirmpassword);

        await this.click(this.saveAdd);
    }

    async cancelUserCreation() {
        await this.click(this.cancelAdd);
    }
<<<<<<< HEAD
=======


    //search user

    async searchByUsername(username) {

>>>>>>> feature-pim
    // Search User
    async searchByUsername(username) 
    {

        await this.fill(this.searchUsername, username);
    }

    async searchByUserRole(userRole) 
    {
        await this.click(this.searchUserRole);
        await this.page.getByRole("option", { name: userRole }).click();
    }

    async searchByEmployeeName(employeeName) {

        await this.click(this.searchEmployeeName);

        await this.searchEmployeeName.pressSequentially(employeeName, {
            delay: 80
        });

        const option = this.page.locator(".oxd-autocomplete-option");

        await option.first().waitFor({
            state: "visible"
        });

        await option.first().click();
    }

    async searchByStatus(status) {

        await this.click(this.searchStatus);

        await this.page.getByRole("option", { name: status }).click();
    }

    async searchUser(searchData) {

        if (searchData.username) {
            await this.searchByUsername(searchData.username);
        }

        if (searchData.userRole) {
            await this.searchByUserRole(searchData.userRole);
        }

        if (searchData.employeeName) {
            await this.searchByEmployeeName(searchData.employeeName);
        }

        if (searchData.status) {
            await this.searchByStatus(searchData.status);
        }

        await this.click(this.searchBtn);
    }

}