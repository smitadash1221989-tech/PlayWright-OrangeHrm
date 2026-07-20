import { expect} from "@playwright/test";
import { basePage } from "../core/basepage";
import { SideMenu } from "../components/SideMenu";
export class Dashboard extends basePage{
    constructor(page)
    {
        super(page);
        this.dashboardtitle = page.getByRole("heading",{name:"Dashboard"});
        this.sidemenu = new SideMenu(page);
    }
    async getDashboardTitle()
    {
        return await this.getText(this.dashboardtitle)
    }
    async verifyDashboardloaded()
    {
        return await this.isVisible(this.dashboardtitle);
    }
}