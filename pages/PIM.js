import { SideMenu } from "../components/SideMenu";
import {test,expect} from '../fixtures/base.fixture';
import { WebTable } from "../components/WebTable";
import { basePage } from "../core/basePage";
import { setUncaughtExceptionCaptureCallback } from "process";
export class PIM extends basePage
{
    constructor(page)
    {
        super(page);
        //component access
        this.sidemenu = new SideMenu(page);
        this.webtable= new WebTable(page);

        //button
        this.searchButton = page.locator(".oxd-button[type='submit']");
        this.resetButton = page.locator(".oxd-button[type='reset']");
        this.addButton = page.locator(".oxd-button[type='button']");
        this.deleteButton= page.getByRole('button').filter({ hasText: /^$/ }).nth(4);
        this.deleteYes=page.getByRole('button', { name: ' Yes, Delete' });
        this.deletecancel=page.getByRole('button', { name: 'No, Cancel' });
        this.dialogdelete=page.getByText('×Are you Sure?The selected');

        //locators field
        this.searchEmplyeeName=page.getByRole('textbox', { name: 'Type for hints...' }).first();
        this.searchEmpId=page.getByRole('textbox').nth(2);
        this.empStatus=page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2);
        this.include =page.locator('div').filter({ hasText: /^Current Employees Only$/ }).nth(2);
        this.superviser=page.locator("getByRole('textbox', { name: 'Type for hints...' }).nth(1)");
        this.jobTitle=page.getByText('-- Select --').nth(1);
        this.subtitle=page.getByText('-- Select --').nth(2);
        //add Fields
        this.imageaddBtn=page.locator('form').getByRole('img', { name: 'profile picture' });
        this.fileinput=page.locator(".oxd-file-input[type='file']");
        this.firstname=page.getByRole('textbox', { name: 'First Name' });
        this.middlename=page.getByRole('textbox', { name: 'Middle Name' });
        this.lastname=page.getByRole('textbox', { name: 'Last Name' });
        this.employeeId=page.getByRole('textbox').nth(4);
        this.saveNewUserBtn=page.getByRole('button', { name: 'Save' });
        this.cancelUserBtn=page.getByRole('button', { name: 'Cancel' });
        this.employeenameSearching = page.getByRole('option', { name: 'Searching....' });
        this.supervisorsearch=page.getByRole('option', { name: 'Searching....' });
        //success toast
        this.successtoast= page.locator(".oxd-toast");
        // this.successtoast = page.locator("//div[@id='oxd-toaster_1']");
        //page.getByText('InfoNo Records Found×').first();

    }
    async openPIMPage()
    {
        await this.sidemenu.menuSearch("PIM");
        await this.sidemenu.openPIM();
    }
    async verifyPimPage()
    {
        await expect(this.page).toHaveURL(/pim/);
    }
    async addBtn()
    {
        await this.click(this.addButton);
    }
    async firstnameadd(firstname)
    {
        await this.fill(this.firstname,firstname);
    }
    async middlenameadd(middlename)
    {
        await this.fill(this.middlename,middlename);
    }
    async lastnameadd(lastname)
    {
        await this.fill(this.lastname,lastname);
    }
    async employeeIdAdd(employeeid)
    {
        await this.fill(this.employeeId,employeeid);
    }
    async imageUpload(path)
    {
        await this.click(this.imageaddBtn);
       await this.fileinput.setInputFiles(path);
       
    }
    async employeeID(empid)
    {
        await this.fill(this.employeeId,empid);
    }
    async addUser(firstname,middlename,lastname,empId,path){
          await this.firstnameadd(firstname);
          await this.middlenameadd(middlename);
          await this.lastnameadd(lastname);
         await this.employeeID(empId);
          await this.imageUpload(path);
          await this.click(this.saveNewUserBtn);
          await this.page.waitForURL(/viewPersonalDetails/, {timeout: 15000});
          await expect(this.page).toHaveURL(/viewPersonalDetails/);

    }
    async verifyAddUser()
    {
        await expect(this.page).toHaveURL(/viewPersonalDetails/);
    }
    async searchEmpname(empname)
    {
        await this.click(this.searchEmplyeeName);
        await this.searchEmplyeeName.pressSequentially(empname,{delay:80});
        await this.employeenameSearching.first().waitFor({state: "visible"});
        await this.employeenameSearching.first().click();

    }
    async employeeIdentry(empId)
    {

        await this.fill(this.searchEmpId,empId);
        console.log("Searching Employee ID:", empId);
    console.log("Search field value:", await this.searchEmpId.inputValue());
    }
    async statusentry(status)
    {
        await this.click(this.empStatus);
        await this.page.getByRole('option', {name: status});
    }
    async includeentry(option)
    {
        await this.click(this.include);
        await this.click(this.page.getByText(option));
    }
    async supervisorentry(supervisername)
    {
        await this.click(this.superviser);
        await this.searchEmplyeeName.pressSequentially(supervisername,{delay:80});
        await this.supervisorsearch.first().waitFor({state: "visible"});
        await this.supervisorsearch.first().click();
    }
    async jobtitleentry(title)
    {
        await this.click(this.jobTitle);
        await this.click(this. page.getByRole('option', { name:title}));
    }
    async getjobtitle()
    {
        //click on the dropdown
        await this.click(this.jobTitle);
        //locate all the options
       const option= await this.page.locator(".oxd-select-text-input");
       //wait for atleast first option is visible
       await option.first().waitFor();
       //get all text
      const jobtitle= await option.allTextContents();
       //print all the option
       console.log(jobtitle);
       
    }
    async subunitentry(option)
    {
        await this.click(this.subtitle);
        await this.click(this.page.getByRole('option', { name:option}));
    }

    async searchEmployee(searchdata)
    {
        if(searchdata.employeeName)
        {
            await this.searchEmpname(searchdata.employeeName);
        }
        if(searchdata.employeeId)
        {
            await this.employeeIdentry(searchdata.employeeId);
        }
        if(searchdata.employmentStatus)
        {
            await this.statusentry(searchdata.employmentStatus);
        }
        if(searchdata.include)
        {
            await this.includeentry(searchdata.include);
        }
        if(searchdata.supervisor)
        {
            await this.supervisorentry(searchdata.supervisor);
        }
        if(searchdata.jobTitle)
        {
            await this.jobtitleentry(searchdata.jobTitle);
        }
        if(searchdata.subUnit)
       {
         await this.subunitentry(searchdata.subUnit);
       }
        await this.click(this.searchButton);
    }
   async verifySearchPim(searchdata)
   {
        const columnMap={
        employeeId: "Id",
        employeeName: "First (& Middle) Name",
        lastName: "Last Name",
        jobTitle: "Job Title",
        employmentStatus: "Employment Status",
        subUnit: "Sub Unit",
        supervisor: "Supervisor"

        }
        
        //the key value pair turns into array, [["key","value"],["key","value"]]
        for(const [key,value] of Object.entries(searchdata))
        {
             console.log("Key:", key);
             console.log("Column:", columnMap[key]);
            //here the columnMap[key]. the key key name and the value from table header both are passed as arguments
            const row = await this.webtable.getRowByColumnValue(columnMap[key],value);
            if (!row)
             {
                throw new Error(`No row found for ${columnMap[key]} = '${value}'`);
            }   
            await expect(row).toBeVisible();
        }
   }
   async printheader()
   {
    await this.webtable.headerdetail();
   }
  async deleteconfirm()
  {
    
    await this.click(this.deleteYes);
  }
  async deletecancel()
  {
   
    await this.click(this.deletecancel);
  }

   async deleteEmployee(confirm=true)
   {

        await this.click(this.deleteButton);
        await this.deleteYes.waitFor();
        await expect(this.dialogdelete).toBeVisible();
        if(confirm)
        {
            await this.deleteconfirm();
        }
        else
        {
            await this.deletecancel();
        }
        await expect(this.dialogdelete).toBeHidden();
   }
   async verifyEmployeeDelete(searchData)
   {
    //page.getByRole('textbox', { name: 'Type for hints...' }).first().fill('linda')
        await this.click(this.searchEmplyeeName);
        await this.searchEmplyeeName.pressSequentially(searchData,{delay:80});
        await this.employeenameSearching.first().waitFor({state: "visible"});
        await this.click(this.searchButton);
       // const value = await this.employeenameSearching.textContent();
        await this.waitForsuccessToast(this.successtoast,"No Records Found");
        console.log("the employee is deleted correctly");
   }
    async addUserFaker(employee){
          await this.firstnameadd(employee.firstName);
          await this.middlenameadd(employee.middleName);
          await this.lastnameadd(employee.lastName);
          await this.employeeID(employee.employeeId);
          await this.click(this.saveNewUserBtn);
          await this.page.waitForURL(/viewPersonalDetails/, {timeout: 15000});
          await expect(this.page).toHaveURL(/viewPersonalDetails/);
    }
}