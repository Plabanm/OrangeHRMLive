import {Locator, Page} from '@playwright/test'

export class TopBarHeader{
    page:Page
    pageHeader: Locator
    name: Locator

    constructor(page:Page){
        this.page = page;
        this.pageHeader = page.locator('.oxd-topbar-header-breadcrumb-module')
        this.name = page.locator('.oxd-userdropdown-name')
    }

    async getHeaderTitle(){
        return await this.pageHeader.textContent()
        
    }

    async getEmployeeName(){
        return await this.name.textContent()
        
    }
}