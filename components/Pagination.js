import { basePage } from "../core/basepage";
export class Pagination extends basePage
{
    constructor(page)
    {
        super(page);
        this.nextnavigation=page.locator(".oxd-pagination-page-item--previous-next").nth(1);
        this.previousnavigation=page.locator(".oxd-pagination-page-item--previous-next").nth(0);
    }
    async nextpagenavigation()
    {
        await this.click(this.nextnavigation);
        console.log("navigation successful");
    }
    async previousnaivgation()
    {
        await this.click(this.previousnavigation);
        console.log("navigation successful previous");
    }
}