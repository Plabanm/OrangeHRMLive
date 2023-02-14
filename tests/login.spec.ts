import {test, expect} from '@playwright/test'
import {loginTest} from '../utils/customTest'
import { LoginPage } from '../PageObject/LoginPage'
import {TopBarHeader} from '../PageObject/components/TopBarHeader'

test.describe('Login Tests', () => {
    let loginPage : LoginPage
    let topBarHeader : TopBarHeader

    test.beforeEach(async({page}) =>{
        loginPage = new LoginPage(page)
        topBarHeader = new TopBarHeader(page)
        await page.goto('/')
        await expect(page).toHaveTitle('OrangeHRM')
    })

    loginTest('Login to orangeHRM with valid details @smoke', async ({loginTestData }) => {
        await loginPage.login(loginTestData.username, loginTestData.password)
        expect(await topBarHeader.getHeaderTitle()).toBe('Dashboard')
    })

    test('Login to orangeHRM without any credential details', async () => {
        await loginPage.login('', '')
        expect(await loginPage.getRequiredErorMessage()).toEqual(2)
    })

    test('Login to orangeHRM with invalid credential details', async () => {
        await loginPage.login('plaban', 'majumder')
        expect(await loginPage.getErorMessage()).toBe('Invalid credentials')
    })
  
  })
  