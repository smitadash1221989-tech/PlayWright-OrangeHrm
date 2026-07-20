import{test,expect}from "../fixtures/base.fixture";
import { basePage } from "../core/basepage";
import { LoginPage } from "../pages/LoginPage";
import { Dashboard } from "../pages/Dashboard";
import { SideMenu } from "../components/SideMenu";
import users from '../testdata/users.json' with {type:'json'};
test.beforeEach("login",async({loginPagepg})=>{
     await loginPagepg.openPage();
     await loginPagepg.userLogin(users.admin.username,users.admin.password);
});
test("verify Dashboard",async({loginPagepg,dashboardPagepg})=>{

     await dashboardPagepg.VerifyDashboard();
     await dashboardPagepg.getDashboardTitle();
     await dashboardPagepg.verifyDashboardloaded();
});
test("verify Time At Work",async({dashboardPagepg})=>{
    await dashboardPagepg.verifyTimeatWork();
});
test("verify Quick Launch",async({dashboardPagepg})=>{
    await dashboardPagepg.verifyQuickLaunch();
});

