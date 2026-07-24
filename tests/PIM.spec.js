import{test,expect} from '../fixtures/base.fixture';
import { basePage } from '../core/basePage';
import { LoginPage } from '../pages/LoginPage';
import { PIM } from '../pages/PIM';
import users from '../testdata/users.json' with {type:'json'};
import PimUser from '../testdata/PimUser.json' with {type:'json'};
import PimSearch from '../testdata/PimSearch.json' with {type:'json'};
import { Dashboard } from '../pages/Dashboard';
test.describe("Pim Module",{tag:'@smoke'},()=>{
    test.beforeEach("loginModule",async({loginPagepg,pimPagepg,dashboardPagepg})=>{
        await loginPagepg.openPage();
        await loginPagepg.userLogin(users.admin.username,users.admin.password);
        await dashboardPagepg.VerifyDashboard();
        await pimPagepg.openPIMPage();
        
      });
    test("Open Pim page",async({pimPagepg})=>{
        await pimPagepg.verifyPimPage();
    }); 
    test("add Employee",async({pimPagepg})=>{
        await pimPagepg.addBtn();
        await pimPagepg.addUser(PimUser.employee1.firstName,PimUser.employee1.middleName,PimUser.employee1.lastName,PimUser.employee1.employeeId,PimUser.employee1.photo);
        
        //await pimPagepg.verifyAddUser();l
        //await basePage.takeScreenshot("test1");
         //await pimPagepg.addUser(PimUser.employee2.firstName,PimUser.employee2.middleName,PimUser.employee2.lastName,PimUser.employee2.employeeId,PimUser.employee1.photo);
    });
     test("Search by employeename",async({pimPagepg})=>{
        const employee = PimSearch.searchEmployee1;
        const searchData = {
            //jobTitle : employee.jobTitle,
            employeeName: employee.employeeName
        };
        console.log(searchData);
        await pimPagepg.searchEmployee(searchData);
        await pimPagepg.verifySearchPim(searchData);
        
    });
    test("print",async({pimPagepg})=>{
        await pimPagepg.printheader();
    })
   test("Delete Employee",async({pimPagepg})=>{
    const searchData = {employeeName: PimSearch.searchEmployee1.employeeName};
    await pimPagepg.searchEmployee(searchData);
    await pimPagepg.deleteEmployee(true);
    await pimPagepg.verifyEmployeeDelete(searchData);
   })
   test("verify Delete",async({pimPagepg})=>{
    const searchData =  PimSearch.searchEmployee1.employeeName;
    await pimPagepg.verifyEmployeeDelete(searchData);
   })
})