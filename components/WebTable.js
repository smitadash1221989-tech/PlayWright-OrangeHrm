import {basePage} from "../core/basePage";

export class WebTable extends basePage{
    constructor(page)
    {
        super(page);
        this.header = page.locator("div.oxd-table-th[role='columnheader']");
        this.row = page.locator(".oxd-table-body .oxd-table-row");

    }
    async headerdetail()
    {
        await this.page.waitForSelector("[role='columnheader']");
        const count = await this.header.count();
        for(let i=1;i<count;i++)
            {
                console.log(await this.header.nth(i).textContent());//header name printed
            } 
    }
    async getColumnIndex(columnname)
    {
        await this.page.waitForSelector("[role='columnheader']");
        const count = await this.header.count();
            //console.log("===== TABLE HEADERS =====");

        for(let i=0;i<count;i++)
        {
            const header = (await this.header.nth(i).textContent())?.trim();
            console.log(`Header ${i}: '${header}'`);
            console.log(header);
            if(header.startsWith(columnname))
            {
                console.log(`Matched at index ${i}`);
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
         console.log(`Searching Column: '${columnname}'`);
        console.log(`Searching Value : '${value}'`);
        const columnIndex= await this.getColumnIndex(columnname);
         console.log("Column Index:", columnIndex);
        const rowcount = await this.row.count();
        for(let i=0;i<rowcount;i++)
        {
                          
            
            const cell = (await this.row.nth(i).locator("[role='cell']").nth(columnIndex).textContent()).trim();
              console.log("-------------");
            console.log(`Row ${i}: ${cell}`);
            if(cell === value.trim())
            return this.row.nth(i);
        }
        return null;
    }
}

    