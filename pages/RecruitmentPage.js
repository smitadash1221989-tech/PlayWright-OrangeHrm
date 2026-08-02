import{basePage} from '../core/basePage';
import{SideMenu} from "../components/SideMenu";
import{dropdown} from "../components/dropdown";
import{DatePicker} from "../components/DatePicker";
import{expect} from '@playwright/test';

export class RecruitmentPage extends basePage
{
    constructor(page)
    {
        super(page);
        this.sideMenu = new SideMenu(page);
        this.dropdown = new dropdown(page);
        this.datepicker = new DatePicker(page);
       

    }
    async openRecruitment()
    {
        await this.sideMenu.menuSearch("Recruitment");
        await this.sideMenu.openRecruitment();
    }
    async verifyRecruitmentPage()
    {   
       await expect(this.page).toHaveURL(/recruitment/);
       console.log("User is navigated to Recruitment Page");
    }
}
