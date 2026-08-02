import{test,expect} from '../fixtures/base.fixture';
import{basePage} from '../core/basePage';
import{RecruitmentPage} from '../pages/RecruitmentPage';
import{LoginPage} from '../pages/LoginPage';
import{Dashboard} from '../pages/Dashboard';
import users from '../testdata/users.json' with {type:'json'};  
import {LeavePage} from '../pages/LeavePage';
import{ FakerUtil } from '../utils/FakerUtil';
import {PIM} from '../pages/PIM';
import PimUser from '../testdata/PimUser.json' with {type:'json'};
import PimSearch from '../testdata/PimSearch.json' with {type:'json'};
import LeaveType from '../testdata/LeaveType.json' with {type:'json'};
test.describe("Leave Page",()=>{
    test.beforeEach("Open Leave Page",async({loginPagepg,leavePagepg,dashboardPagepg,pimPagepg})=>{
        await loginPagepg.openPage();
        await loginPagepg.userLogin(users.admin.username,users.admin.password);
        await dashboardPagepg.VerifyDashboard();
        await pimPagepg.openPIMPage();
               
        
    });
    //test("verify Leave Page",async({leavePagepg})=>{
      //  await leavePagepg.verifyLeavePage();
    //})
    test("assign Leave",async({leavePagepg,pimPagepg})=>{
        await pimPagepg.addBtn();
        const employee1 = FakerUtil.employee();//stores the return value for the object returned
        console.log(employee1);
        await pimPagepg.addUserFaker(employee1);
        await leavePagepg.openLeavePage();
        await leavePagepg.verifyLeavePage();
        await leavePagepg.assignLeave(employee1.fullName,LeaveType.leave.validLeave.leaveType,LeaveType.leave.validLeave.fromDate,LeaveType.leave.validLeave.toDate);
        await leavePagepg.assignConfirm(true);
        
        

    })
})