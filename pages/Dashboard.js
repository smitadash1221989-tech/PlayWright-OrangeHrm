import { expect} from "@playwright/test";
import { basePage } from "../core/basepage";
import { SideMenu } from "../components/SideMenu";
export class Dashboard extends basePage{
    constructor(page)
    {
        super(page);
        this.dashboardtitle = page.getByRole("heading",{name:"Dashboard"});
        this.dashboardheader=page.locator(".oxd-text--h6");
        this.sidemenu = new SideMenu(page);
        this.timeatwork=page.locator("div.orangehrm-dashboard-widget-name");
        this.quicklaunch = page.getByText("Quick Launch");
        this.employeedistribution=page.getByText("Employee Distribution by Sub Unit");
    }
    async VerifyDashboard()
    {
        await this.isVisible(this.dashboardheader);
    }
    async getDashboardTitle()
    {
        return await this.getText(this.dashboardtitle)
    }
    async verifyDashboardloaded()
    {
        return await this.isVisible(this.dashboardtitle);
    }
    async verifyEmployeeDistributionvisible()
    {
        return await this.isVisible(this.employeedistribution);
    }
    async verifyTimeatWork()
    {
        await this.isVisible(this.timeatwork);
        console.log("user is on the time at work");

    }
    async verifyQuickLaunch()
    {
        await this.isVisible(this.quicklaunch);
        console.log("user is on the quick launch");
    }
}