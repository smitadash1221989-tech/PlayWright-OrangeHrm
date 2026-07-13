import{test,expect}from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';
import { basePage } from '../core/basepage';
test.describe("Login Module",()=>{
    test("verify Valid Login", async({page})=>{
        const loginPg = new LoginPage(page);
        const dashboardPg = new Dashboard(page);
        await loginPg.openPage();
        await loginPg.userLogin("Admin","admin123");
        const dbTitle = await dashboardPg.getDashboardTitle();
        await loginPg.takeScreenshot("dashboardtext");
        await expect(dbTitle).toContain('Dashboard');
    });
    test("verify Invalid Login", async({page})=>{
        const loginPg = new LoginPage(page);
        const dashboardPg = new Dashboard(page);
        await loginPg.openPage();
        await loginPg.userLogin("Admin","wrongpassword");
        const error = await loginPg.getErrorMessage();
        await loginPg.takeScreenshot("error1");
        await expect(error).toContain("Invalid credentials");
    });
});