import { basePage } from "../core/basepage";
export class Admin extends basePage{
    constructor(page)
    {
        super(page);
        this.adminHeader = page.locator("h6.oxd-text--h6",{hasText:"Admin"});
        this.userName=page.locator("input.oxd-input--active");
        this.searchBtn=page.getByRole("button",{name:' Search '});

        

    }
    async getHeader()
    {
        return await this.getText(this.adminHeader);
    }
    async searchUser(username)
    {
        await this.fill(this.userName,username);
        await this.click(this.searchBtn);
    }
   
}