import { basePage } from "../core/basepage";
export class DatePicker extends basePage
{
    constructor(page)
    {
        super(page);
    }

    async selectDate(locator,date)
    {
        await this.click(locator);
        await this.fill(locator,date);
    }
}