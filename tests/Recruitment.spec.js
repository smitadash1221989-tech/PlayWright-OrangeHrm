import{test,expect} from '../fixtures/base.fixture';
import{basePage} from '../core/basePage';
import{RecruitmentPage} from '../pages/RecruitmentPage';
import{LoginPage} from '../pages/LoginPage';
import{Dashboard} from '../pages/Dashboard';
import users from '../testdata/users.json' with {type:'json'};
test.describe('Recruitment Page',()=>{
    test.beforeEach("open Recruitment Page",async({loginPagepg,recruitmentPagepg,dashboardPagepg})=>{
        await loginPagepg.openPage();
        await loginPagepg.userLogin(users.admin.username,users.admin.password);
        await dashboardPagepg.VerifyDashboard();
        await recruitmentPagepg.openRecruitment();
    });
    test("verify recruitment Page",async({recruitmentPagepg})=>{
        await recruitmentPagepg.verifyRecruitmentPage();
    });
})