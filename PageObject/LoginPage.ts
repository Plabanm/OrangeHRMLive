import { Locator, Page} from '@playwright/test'

export class LoginPage{
    readonly page:Page
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly forgotPassword: Locator
    readonly errorMessage: Locator
    readonly inputRequiredError: Locator

    constructor(page:Page){
        this.page = page;
        this.userNameInput = page.locator('//input[@name="username"]')
        this.passwordInput = page.locator('//input[@name="password"]')
        this.loginButton = page.locator('.orangehrm-login-button')
        this.forgotPassword = page.locator('.orangehrm-login-forgot-header')
        this.errorMessage = page.locator('.oxd-alert-content-text')
        this.inputRequiredError = page.locator('.oxd-input-field-error-message')
    }

    async login(username:string, password:string){
        await this.userNameInput.type(username)
        await this.passwordInput.type(password)
        await this.loginButton.click()
    }

    async requestPasswordReset(){
        await this.forgotPassword.click()
    }

    async getErorMessage(){
        return await this.errorMessage.textContent()
    }

    async getRequiredErorMessage(){
        return await this.inputRequiredError.count() 
    }
}