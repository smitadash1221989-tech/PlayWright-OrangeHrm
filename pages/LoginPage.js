import {expect} from '@playwright/test';
import { basePage } from '../core/basePage';
export class LoginPage extends basePage{
    constructor(page)
    {
        super(page);
        this.username = page.locator("input[name='username']");
        this.password = page.locator("input[name='password']");
        this.loginBtn = page.locator("button[type='submit']");
        this.errorMessage = page.locator("p.oxd-alert-content-text");
    }
    async openPage()
    {
        await this.navigate("/");
    }
    async enterUsername(username)
    {
        await this.fill(this.username,username);
    }
    async enterPassword(password)
    {
        await this.fill(this.password,password);
    }
    async clickLogin()
    {
        await this.click(this.loginBtn);
    }
    async userLogin(username,password)
    {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
    async getErrorMessage()
    {
        return await this.getText(this.errorMessage);
    }
}
