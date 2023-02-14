import {test, expect} from '@playwright/test'
import {addEmployeeTest} from '../utils/customTest'
import { LoginPage } from '../PageObject/LoginPage'
import {TopBarHeader} from '../PageObject/components/TopBarHeader'
import {LeftNavBar} from '../PageObject/components/LeftNavBar'
import {PIMPage} from '../PageObject/PIMPage'

test.describe('PIM Tests', () => {
    let loginPage : LoginPage
    let topBarHeader : TopBarHeader
    let navbar : LeftNavBar
    let pimPage: PIMPage

test.beforeEach(async({page }) =>{
        loginPage = new LoginPage(page)
        topBarHeader = new TopBarHeader(page)
        navbar = new LeftNavBar(page)
        pimPage = new PIMPage(page)
        
        await page.goto('/')
        await expect(page).toHaveTitle('OrangeHRM')
        await loginPage.login('Admin', 'admin123')
        expect(await topBarHeader.getHeaderTitle()).toBe('Dashboard')
        await navbar.ClickOnMenu('PIM')
        expect(await topBarHeader.getHeaderTitle()).toBe('PIM')
        
    })

    addEmployeeTest('Add a new Employee to the List without Credential @smoke', async ({addEmployeeData}) => {
        await pimPage.goToAddEmployeeTab()
        await pimPage.addEmployeeWithOutCredential(addEmployeeData.firstName, addEmployeeData.lastName, addEmployeeData.employeeId)
        expect(await pimPage.getCreatedEmplyeeName()).toContain(addEmployeeData.firstName)
        expect(await pimPage.getCreatedEmplyeeName()).toContain(addEmployeeData.lastName)
    })

    test('Add a new Employee to the List without Credential without providing last name', async ({}) => {
        await pimPage.goToAddEmployeeTab()
        await pimPage.addEmployeeWithOutCredential('plaban', '', 999)
        expect(await pimPage.getErrorMessage()).toBe('Required')
        expect(await pimPage.getErrorMessageCount()).toEqual(1)
    })

    test('Add a new Employee to the List without Credential without providing any Name Input', async ({}) => {
        await pimPage.goToAddEmployeeTab()
        await pimPage.addEmployeeWithOutCredential('', '', 999)
        expect(await pimPage.getErrorMessageCount()).toEqual(2)
    })


    addEmployeeTest('Add a new Employee to the List with Credential @smoke', async ({addEmployeeData}) => {
        await pimPage.goToAddEmployeeTab()
        await pimPage.addEmployeeWithCredential(addEmployeeData.firstName, addEmployeeData.lastName, addEmployeeData.employeeId, addEmployeeData.username, addEmployeeData.password)
        expect(await pimPage.getCreatedEmplyeeName()).toContain(addEmployeeData.firstName)
        expect(await pimPage.getCreatedEmplyeeName()).toContain(addEmployeeData.lastName)
    })

    test('Add a new Employee to the List with Credential with short Password', async ({}) => {
        await pimPage.goToAddEmployeeTab()
        await pimPage.addEmployeeWithCredential('plaban', 'maj', 999, 'usernumber1', 'abcd')
        expect(await pimPage.getErrorMessage()).toBe('Should have at least 8 characters')
    })

    test('Add a new Employee to the List with Credential with invalid Password', async ({}) => {
        await pimPage.goToAddEmployeeTab()
        await pimPage.addEmployeeWithCredential('plaban', 'maj', 999, 'usernumber1', 'StrongPass')
        expect(await pimPage.getErrorMessage()).toBe('Your password must contain a lower-case letter, an upper-case letter, a digit and a special character. Try a different password')
    })

    addEmployeeTest('Search for an existing employee @smoke', async ({addEmployeeData}) => {
        await pimPage.goToAddEmployeeTab()
        await pimPage.addEmployeeWithOutCredential(addEmployeeData.firstName, addEmployeeData.lastName, addEmployeeData.employeeId )
        await pimPage.goToEmployeeListTab()
        await pimPage.searchEmployee(addEmployeeData.firstName)
        expect(await pimPage.getSearchedEmplyeeName()).toContain(addEmployeeData.firstName)
    });

})
  