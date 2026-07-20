import { expect} from "@playwright/test";
import { basePage } from "../core/basepage";
import { SideMenu } from "../components/SideMenu";
export class Dashboard extends basePage{
    constructor(page)
    {
        super(page);
        this.dashboardtitle = page.getByRole("heading",{name:"Dashboard"});
        this.sidemenu = new SideMenu(page);
        this.timeatwork=page.locator("div.orangehrm-dashboard-widget-name");
        this.quicklaunch = page.getByText("Quick Launch");
        this.employeedistribution=page.getByText("Employee Distribution by Sub Unit");
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
        return await this.employeedistribution.isVisible();
    }
    async verifyTimeatWork()
    {
        return await this.timeatwork.isVisible();
    }
    async verifyQuickLaunch()
    {
        return await this.verifyQuickLaunch.isVisible();
    }
}