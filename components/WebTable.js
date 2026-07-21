import {basePage} from "../core/basePage";

export class WebTable extends basePage{
    constructor(page)
    {
        super(page);
        this.header = page.locator("[role='columnheader']");
        this.row = page.locator(".oxd-table-row[role='row']");

    }
    async headerdetail()
    {
        const count = await this.header.count();
        for(let i=0;i<count;i++)
            {
                console.log(await this.header.nth(i).textContent());//header name printed
            } 
    }
    async getColumnIndex(columnname)
    {
        const count = await this.header.count();
        for(let i=0;i<count;i++)
        {
            const header = (await this.header.nth(i).textContent()).trim();
            if(header===columnname);
            {
                return i;
            }
        }
        throw new Error(`${columnname} not found`);
        
    }
    async readEveryCell()
    {
        const rowcount = await this.row.count();
        for(let i=0;i<rowcount;i++)
        {
            const cell = await this.row.nth(i).locator("[role='cell']");

            
        }
    }
    async getRowByColumnValue(columnname,value)
    {
        const columnIndex= await this.getColumnIndex(columnname);
        const rowcount = await this.row.count();
        for(let i=0;i<rowcount;i++)
        {
            const cell = await this.row.nth(i).locator("[role='cell']").nth(columnIndex);
            if(await cell.textContent.trim()===value)
             return this.row.nth(i);
        }
        return null;
    }
}

    