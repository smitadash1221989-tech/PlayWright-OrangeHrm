import { LoginPage } from '../pages/LoginPage';
import{test as base} from './base.fixture';
export const test = base.extend({
    loggedInPage: async({loginPagepg},use)=>{
        await loginPagepg.openPage();
        await loginPagepg.userLogin("Admin","admin123");
        await use(page);
    }
    
});