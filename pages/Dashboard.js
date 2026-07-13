import { expect} from "@playwright/test";
import { basePage } from "../core/basepage";
export class Dashboard extends basePage{
    constructor(page)
    {
        super(page);
        this.dashboardtitle = page.getByRole("heading",{name:"Dashboard"});
    }
    async getDashboardTitle()
    {
        return await this.getText(this.dashboardtitle)
    }
}