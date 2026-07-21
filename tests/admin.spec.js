import{test,expect} from '../fixtures/base.fixture';
import { basePage } from '../core/basePage';
import { Admin } from '../pages/Admin';
import { LoginPage } from '../pages/LoginPage';
import { WebTable } from '../components/WebTable';
import { SideMenu } from '../components/SideMenu';
import users from '../testdata/users.json' with {type:'json'};
test.describe("Admin Module",{tag:'@smoke'},()=>{
    
    test("openAdmin",async({adminPagepg,loginPagepg})=>{
        await loginPagepg.openPage();
        await loginPagepg.userLogin(users.admin.username,users.admin.password);
        
        await adminPagepg.openAdminPage();
    });
    test("add New User", async({adminPagepg,loginPagepg})=>{
        await loginPagepg.openPage();
        await loginPagepg.userLogin(users.admin.username,users.admin.password);
         await adminPagepg.openAdminPage();  
        await adminPagepg.addUser();
        await adminPagepg.addNewUser(users.newUser1.role,
    users.newUser1.employeeName,
    users.newUser1.status,
    users.newUser1.username,
    users.newUser1.password,
    users.newUser1.confirmpassword);

    })
});