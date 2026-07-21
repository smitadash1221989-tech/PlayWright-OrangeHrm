import{test,expect} from '../fixtures/base.fixture';
import { basePage } from '../core/basePage';
import { Admin } from '../pages/Admin';
import { LoginPage } from '../pages/LoginPage';
import { WebTable } from '../components/WebTable';
import { SideMenu } from '../components/SideMenu';
import users from '../testdata/users.json' with {type:'json'};
test.describe("Admin Module",{tag:'@smoke'},()=>{
    test.beforeEach("login",async({loginPagepg})=>{
        await loginPagepg.openPage();
        await loginPagepg.userLogin(users.admin.username,users.admin.password);
    });
    test("openAdmin",async({adminPagepg})=>{
        await adminPagepg.openAdminPage();
    });
});