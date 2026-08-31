import { expect } from "@playwright/test";

// this basepage contains the common clicks,fill,wait for page load, which can be used in all the pages and we dont have to repeat the same code again and again
export class basePage{
    //receiving the page object
    constructor(page)
    {
        this.page=page;

    }
    //creating a async function for click functionality, this can be used everywhere for click
    async click(locator)
    {
        await locator.waitFor({state:'visible'});
        await locator.click();
    }
    //creating a fill function for filling of the details everywhere , passing the locator and the text to be entered in the textbox

    async fill(locator,text)
    {
        await locator.waitFor({ state: "visible" });
        await locator.fill(text);
    }
    async getText(locator)
    {
        return await locator.textContent();
    }
    async takeScreenshot(name)
    {
        await this.page.screenshot({
            path:`screenshots/${name}.png`
        });
    }
    async navigate(url)
    {
        await this.page.goto(url);
    }
    async getTitle()
    {
        return await this.page.getTitle();
    }
    async isVisible(locator)
    {
        return await locator.isVisible();
    }
    async waitforPageLoad()
    {
        await this.page.waitForLoadState("networkidle");
    }
    async waitForsuccessToast(locator,message)
    {
        await expect(locator).toBeVisible();
        await expect(locator).toContainText(message);
        await expect(locator).toBeHidden();
    }
}