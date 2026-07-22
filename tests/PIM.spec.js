import{test,expect} from '../fixtures/base.fixture';
import { basePage } from '../core/basePage';
import { LoginPage } from '../pages/LoginPage';
import { PIM } from '../pages/PIM';
import users from '../testdata/users.json' with {type:'json'};
import PimUser from '../testdata/PimUser.json' with {type:'json'};
test.describe("Pim Module",{tag:'@smoke'},()=>{
    test.beforeEach("loginModule",async({loginPagepg,pimPagepg})=>{
        await loginPagepg.openPage();
        await loginPagepg.userLogin(users.admin.username,users.admin.password);
        await pimPagepg.openPIMPage();
      });
    test("Open Pim page",async({pimPagepg})=>{
        await pimPagepg.verifyPimPage();
    }); 
    test("add Employee",async({pimPagepg})=>{
        await pimPagepg.addBtn();
        await pimPagepg.addUser(PimUser.employee1.firstName,PimUser.employee1.middleName,PimUser.employee1.lastName,PimUser.employee1.employeeId,PimUser.employee1.photo);
    });
    test("Search User",async({pimPagepg})=>{
        await pimPagepg.getjobtitle();
    })
})