import {Locator, Page} from '@playwright/test'

export class PIMPage{
    readonly page:Page
    readonly employeeList: Locator
    readonly addEmployee: Locator
    readonly employeeNameInput: Locator
    readonly autoCompleteDropDown: Locator
    readonly searchButton: Locator
    readonly firstAndMiddleName: Locator
    readonly firstNameInput: Locator
    readonly middleNameInput: Locator
    readonly lastNameInput: Locator
    readonly employeeIdInput: Locator
    readonly createLoginSwitchButton: Locator
    readonly saveButton: Locator
    readonly cancelButton: Locator
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly passwordConfirmInput: Locator
    readonly employeeNameEdit: Locator
    readonly inputErrorMessage: Locator
    readonly employeeInfoTitle: Locator

    constructor(page:Page){
        this.page = page;
        this.employeeList = page.locator('text=Employee List')
        this.addEmployee = page.locator('text=Add Employee')
        this.employeeNameInput = page.locator('//div[@class="oxd-form-row"]/div/div[1]/div/div[2]/div/div/input')
        this.autoCompleteDropDown = page.locator('.oxd-autocomplete-dropdown')
        this.searchButton = page.locator('//button[text()=" Search "]')
        this.firstAndMiddleName = page.locator('//div[@class="oxd-table-card"]/div/div[3]/div')
        this.firstNameInput = page.locator('.orangehrm-firstname')
        this.middleNameInput = page.locator('.orangehrm-middlename')
        this.lastNameInput = page.locator('.orangehrm-lastname')
        this.employeeNameEdit = page.locator('.orangehrm-edit-employee-name')
        this.createLoginSwitchButton = page.locator('.oxd-switch-input')
        this.userNameInput = page.locator('//div[@class="oxd-form-row"][2]/div/div[1]/div/div[2]/input')
        this.passwordInput = page.locator('//div[@class="orangehrm-employee-form"]/div[4]/div/div[1]/div/div[2]/input')
        this.passwordConfirmInput = page.locator('//div[@class="orangehrm-employee-form"]/div[4]/div/div[2]/div/div[2]/input')
        this.saveButton = page.locator('//button[text()=" Save "]')
        this.inputErrorMessage = page.locator('.oxd-input-field-error-message')
        this.employeeIdInput = page.locator('//div[@class="oxd-form-row"][1]/div[2]/div/div/div[2]/input')
        this.employeeInfoTitle = page.locator('.oxd-table-filter-title')
    }

    async goToEmployeeListTab(){
        await this.employeeList.click()
    }

    async goToAddEmployeeTab(){
        await this.addEmployee.click()  
    }

    async searchEmployee(name: string){
        await this.employeeInfoTitle.waitFor()
        await this.employeeNameInput.fill(name)
        await this.autoCompleteDropDown.click()
        await this.searchButton.click()
    }

    async getSearchedEmplyeeName(){
        await this.page.waitForLoadState('networkidle')
        await this.firstAndMiddleName.scrollIntoViewIfNeeded();
        return await this.firstAndMiddleName.textContent()
    }

    async addEmployeeWithOutCredential(firstname: string, lastname: string, id:number){
        await this.firstNameInput.fill(firstname)
        await this.lastNameInput.fill(lastname)
        await this.employeeIdInput.fill(id.toString())
        await this.saveButton.click()
    }

    async addEmployeeWithCredential(firstname: string, lastname: string,id:number, username:string, password:string){
        await this.firstNameInput.fill(firstname)
        await this.lastNameInput.fill(lastname)
        await this.employeeIdInput.fill(id.toString())
        await this.createLoginSwitchButton.click()
        await this.userNameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.passwordConfirmInput.fill(password)
        await this.saveButton.click()
    }

    async getCreatedEmplyeeName(){
        await this.employeeNameEdit.waitFor();
        return await this.employeeNameEdit.textContent()
    }

    async getErrorMessage(){
        return await this.inputErrorMessage.textContent()
    }

    async getErrorMessageCount(){
        return await this.inputErrorMessage.count()
    }
}