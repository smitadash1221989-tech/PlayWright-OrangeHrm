export class SideMenu{
    constructor(page)
    {
        this.page=page;
        this.sidemenu= page.locator("button.oxd-main-menu-button");
    }
    async navigateSidemenu(sidemenu)
    {
        await this.sidemenu.click();
    }
}