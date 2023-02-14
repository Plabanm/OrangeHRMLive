import {Locator, Page} from '@playwright/test'

export class LeftNavBar{
    page:Page
    dashboard: Locator
    admin:Locator
    pim:Locator
    leave: Locator
    time: Locator
    recruitment: Locator
    myInfo: Locator
    performance: Locator
    directory:Locator
    maintenence:Locator
    buzz:Locator

    constructor(page:Page){
        this.page = page;
        this.admin = page.locator('//*[text()="Admin"]')
        this.pim = page.locator('//*[text()="PIM"]')
        this.leave = page.locator('//*[text()="Leave"]')
        this.time = page.locator('//*[text()="Time"]')
        this.recruitment = page.locator('//*[text()="Recruitment"]')
        this.myInfo = page.locator('//*[text()="My Info"]')
        this.performance = page.locator('//*[text()="Performance"]')
        this.dashboard = page.locator('//*[text()="Dashboard"]')
        this.directory = page.locator('//*[text()="Directory"]')
        this.maintenence = page.locator('//*[text()="Maintenance"]')
        this.buzz = page.locator('//*[text()="Buzz"]')
    }

    async ClickOnMenu(pageName:string){
        switch(pageName){
            case 'Admin':
                await this.admin.click()
                break
            case 'PIM':
                await this.pim.click() 
                break
            case 'Leave':
                await this.leave.click()
                break
            case 'Time':
                await this.time.click()
                break
            case 'Recruitment':
                await this.recruitment.click()
                break
            case 'My Info':
                await this.myInfo.click()
                break
            case 'Performance':
                await this.performance.click()
                break                           
            case 'Dashboard':
                await this.dashboard.click()
                break
            case 'Directory':
                await this.directory.click()
                break
            case 'Maintenance':
                await this.maintenence.click()
                break 
            case 'Buzz':
                await this.buzz.click()
                break           
            default: new Error(`Navigation Link to ${pageName} Does not exit`)                
        }
    }
}