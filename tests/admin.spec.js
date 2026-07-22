import{test,expect} from '../fixtures/base.fixture';
import { basePage } from '../core/basepage';
import { Admin } from '../pages/Admin';
import { LoginPage } from '../pages/LoginPage';
import users from '../testdata/users.json' with {type:'json'};
import adminSearch from '../testdata/adminSearch.json' with {type:'json'};
test.describe("Admin Module",{tag:'@smoke'},()=>{
     test.beforeEach(async ({ loginPagepg, adminPagepg }) => {

        await loginPagepg.openPage();
        await loginPagepg.userLogin(
            users.admin.username,
            users.admin.password
        );
        await adminPagepg.openAdminPage();

    });
    
    test("openAdmin",async({page})=>{
        await expect(page).toHaveURL(/admin/);
    });
    test("add New User", async({adminPagepg,loginPagepg})=>{
        await adminPagepg.addUser();
        await adminPagepg.addNewUser(users.newUser1.role,
    users.newUser1.employeeName,
    users.newUser1.status,
    users.newUser1.username,
    users.newUser1.password,
    users.newUser1.confirmpassword);

    });
    test("Cancel Add User",async({loginPagepg,adminPagepg})=>{
         
        await adminPagepg.addUser();
        await adminPagepg.cancelUserCreation();
    });
    test("Search User by username", async({loginPagepg,adminPagepg})=>{
        
         await adminPagepg.searchUser(adminSearch.searchByUsername.username);
    });
    test("Search User by User Role", async ({ adminPagepg }) => {

        await adminPagepg.searchUser(
            adminSearch.searchByUserRole
        );

    });

    test("Search User by Employee Name", async ({ adminPagepg }) => {

        await adminPagepg.searchUser(
            adminSearch.searchByEmployeeName
        );

    });

    test("Search User by Status", async ({ adminPagepg }) => {

        await adminPagepg.searchUser(
            adminSearch.searchByStatus
        );

    });

    test("Search User by Multiple Fields", async ({ adminPagepg }) => {

        await adminPagepg.searchUser(
            adminSearch.searchByMultiple
        );

    });



});