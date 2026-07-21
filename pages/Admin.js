import { basePage } from "../core/basePage";
import { expect } from "@playwright/test";
import { SideMenu } from "../components/SideMenu";
import { WebTable } from "../components/WebTable";
export class Admin extends basePage
{
    constructor(page)
    {
        super(page);
        this.sidemenu = new SideMenu(page);
        this.Webtable = new WebTable(page);
        this.searchBtn = page.locator(".oxd-button[type='submit']");
        this.resetBtn=page.locator(".oxd-button[type='button']").nth(0);
        this.addBtn=page.getByRole("button",{name: "Add"});
        this.userRole=page.locator(".oxd-select-text").nth(0);
        this.status=page.locator(".oxd-select-text").nth(1);
        this.employeename=page.locator("input[placeholder='Type for hints...']");
        this.userName=page.locator(".oxd-input").nth(1);
        this.password=page.locator(".oxd-input[type='password']").nth(0);
        this.confirmPassword=page.locator(".oxd-input[type='password']").nth(1);
        this.cancelAdd=page.locator(".oxd-button[type='button']");
        this.saveAdd=page.locator(".oxd-button[type='submit']");

    }
    async openAdminPage()
    {
        //await this.sidemenu.navigateSidemenu();
        await this.sidemenu.menuSearch("Admin");
        await this.sidemenu.openAdmin();
    }
    async addUser()
    {
        await this.click(this.addBtn);
    }
    async addUserRole(userRole)
    {
        await this.click(this.userRole);
        await this.page.getByRole("option",{name:userRole}).click();
        
    }
    async addEmpName(EmpName)
    {
        this.page.on("request", request => {
  if (request.url().includes("employee")) {
    console.log("REQUEST:", request.method(), request.url());
  }
});

this.page.on("response", response => {
  if (response.url().includes("employee")) {
    console.log("RESPONSE:", response.status(), response.url());
  }
});
        await this.click(this.employeename);
        await this.employeename.pressSequentially(EmpName,{delay: 80}); 
        const option = this.page.locator(".oxd-autocomplete-option");
        await option.first().waitFor({
        state: "visible",
        timeout: 10000
    });
    await option.first().click();

        
    }
    async addUserName(userName)
    {
        await this.fill(this.userName,userName);
    }
    async addStatus(status)
    {
        await this.click(this.status);
        await this.page.getByRole("option",{name:status}).click();
    }
    async addPassword(password)
    {
        await this.fill(this.password,password);
    }
    async addconfirmPass(confirmpassword)
    {
        await this.fill(this.confirmPassword,confirmpassword);
    }
    async addNewUser(userRole,EmpName,Status,userName,password,confirmpassword)
    {
        
        await this.addUserRole(userRole);
        console.log("userrole");
        await this.addEmpName(EmpName);
        console.log("EmpName");
        await this.addStatus(Status);
        console.log("Status");
        await this.addUserName(userName);
        console.log("usernmae");
        await this.addPassword(password);
        console.log("password");
        await this.addconfirmPass(confirmpassword);
        console.log("confirmpassword");
        await this.click(this.saveAdd);
        console.log("added");
        console.log("user add successfully");

    }
    async cancelUserCreation()
    {
        await this.click(this.cancelAdd);
    }
   
}