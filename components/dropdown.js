import {basePage} from '../core/basepage';
export class dropdown extends basePage
{
    constructor(page)
    {
        super(page);
        this.option=  page.getByText('-- Select --').first();

    }
    async selectdropdown(dropdownlocator)
    {
        await this.click(dropdownlocator);
    }  
    async selectOption(optionLocator)
    {
        await this.click(optionLocator);
        
    }
}