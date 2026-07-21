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
        this.addBtn=page.locator(".oxd-button[type='button']").nth(1);

    }
    async openAdminPage()
    {
        //await this.sidemenu.navigateSidemenu();
        await this.sidemenu.menuSearch("Admin");
        await this.sidemenu.openAdmin();
    }
   
}