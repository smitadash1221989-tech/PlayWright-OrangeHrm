import { basePage } from "../core/basepage";
export class SideMenu extends basePage{
    constructor(page)
    {
        super(page);
        this.sidemenu= page.locator("button.oxd-main-menu-button");
        this.search =page.locator("input[placeholder='Search']");
        this.admin=page.locator('span.oxd-main-menu-item--name:has-text("Admin")');
        
    }
    async navigateSidemenu()
    {
        await this.click(this.sidemenu);
    }
    async isSearchVisible()
    {
        return await this.isVisible(this.search);
    }
    async menuSearch(menuname)
    {   
        await this.fill(this.search,menuname);
        
    }
    async openAdmin()
    {
        await this.click(this.admin);
    }
    
}