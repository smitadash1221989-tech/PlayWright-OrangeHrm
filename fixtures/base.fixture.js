import {test as base, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';
import { Admin } from '../pages/Admin';

console.log('BASE FIXTURE LOADED');
console.log('typeof base =', typeof base);
console.log('typeof base.extend =', typeof base.extend);
export const test = base.extend({
    loginPagepg: async({page},use)=>{
        const loginpg = new LoginPage(page);
        await use(loginpg);
    },
    dashboardPagepg: async({page},use)=>{
        const dashboardPg = new Dashboard(page);
        await use(dashboardPg);
    },
    adminPagepg: async({page},use)=>{
        const adminPagepg = new Admin(page);
        await use(adminPagepg);
    }

});
export{expect};