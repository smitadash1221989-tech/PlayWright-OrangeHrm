import{test,expect} from '../fixtures/base.fixture';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';
import { basePage } from '../core/basepage';
import users from '../testdata/users.json' with {type:'json'};
test.describe("Login Module",()=>{
    test("verify Valid Login", async({loginPagepg,dashboardPagepg})=>{
        await loginPagepg.openPage();
        await loginPagepg.userLogin(users.admin.username,users.admin.password);
        const dbTitle = await dashboardPagepg.getDashboardTitle();
        await loginPagepg.takeScreenshot("dashboardtext");
        await expect(dbTitle).toContain('Dashboard');
    });
    test("verify Invalid Login", async({loginPagepg,dashboardPagepg})=>{
         await loginPagepg.openPage();
         await loginPagepg.userLogin("Admin","wrongpassword");
        const error = await loginPagepg.getErrorMessage();
        await loginPagepg.takeScreenshot("error1");
        await expect(error).toContain("Invalid credentials");
    });
});