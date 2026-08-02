import{basePage} from '../core/basePage';
import{expect} from '@playwright/test';

import{SideMenu, sideMenu} from "../components/SideMenu";
import{dropdown} from "../components/dropdown";
import{DatePicker} from "../components/DatePicker";
export class LeavePage extends basePage{
    constructor(page)
    {
        super(page);
        this.sidemenu= new SideMenu(page);
        this.dropdown = new dropdown(page);
        this.datepicker = new DatePicker(page);
        this.assignleave = page.getByRole('link', { name: 'Assign Leave' });
        this.assignHeading=page.getByRole('heading', { name: 'Assign Leave' });
        this.employeeName = page.getByRole('textbox', { name: 'Type for hints...' });
        //this.employeenameSearching =page.getByRole('option', { name: 'Searching....' });
        this.leavetype =page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2);
        this.fromDate = page.locator(".oxd-input-group").filter({hasText:"From Date"}).locator("input.oxd-input");
        this.toDate = page.locator(".oxd-input-group").filter({hasText: "To Date"}).locator("input.oxd-input");
        this.assignBtn = page.locator("button.oxd-button[type='submit']");
        this.dialogAssignLeave = page.getByText("Confirm Leave Assignment", { exact: true });
        this.confirmAssign = page.getByRole('button', { name: 'Ok' });
        this.cancelAssign=page.getByRole('button', { name: 'Cancel' });
    }
    async openLeavePage()
    {
        await this.sidemenu.menuSearch("Leave");
        await this.sidemenu.openLeave();
    }
    async verifyLeavePage()
    {
        await expect(this.page).toHaveURL(/leave/);
        console.log("this is the leave page");
    }
    async EmployeeName(employeeName)
    {
        await this.click(this.employeeName);
        await this.employeeName.pressSequentially(employeeName,{delay:80});
        const employeeOption = this.page.getByRole('option', { name: employeeName });
        await employeeOption.waitFor({state:'visible'});
        await employeeOption.click();

    }
    async fromDatePick(fromdate)
    {
        await this.datepicker.selectDate(this.fromDate,fromdate);
    }
    async toDatePick(todate)
    {
        await this.datepicker.selectDate(this.toDate,todate);
    }
    async confirmAssignAction()
    {
        await this.click(this.confirmAssign);
    }
    async cancelAssignAction()
    {
        await this.click(this.cancelAssign);
    }
    async assignButtonclick()
    {
        await this.click(this.assignBtn);
    }
    async assignLeave(empName,optiontext,fromdate,todate)
    {
        await this.click(this.assignleave);
        await this.isVisible(this.assignHeading);
        console.log("user is in assign leave page");
        await this.EmployeeName(empName);
       await  this.dropdown.selectdropdown(this.leavetype);
        await this.dropdown.selectOption(this.page.getByRole('option', { name: optiontext }));
        await this.fromDatePick(fromdate);
        this.toDatePick(todate);
        console.log("all data entered");
        //await this.assignButtonclick();
        //console.log("the buttno is clicked:");
        //await this.page.pause();
             
        
        
    }
    async assignConfirm(confirm=true)
    {
        await this.assignButtonclick();
         
        console.log("the button is clicked here");
        await expect(this.dialogAssignLeave).toBeVisible();
        await this.page.pause();
        console.log("the dialog is visible");
        await this.confirmAssign.waitFor();
        if(confirm)
        {
            await this.confirmAssignAction();
        }
        else
        {
            await this.cancelAssignAction();
        }

    }
} 
