import { Account, Employee } from './types'
import {generateString, getRandomInt} from './common'
import base from '@playwright/test'

let firstName = generateString(3)
let lastName = generateString(5)
let id = getRandomInt(10000,99999)

export const loginTest = base.extend<Account>({
    loginTestData: {
        username:'Admin',
        password: 'admin123'
    }
    
})

export const addEmployeeTest = base.extend<Employee>({
    addEmployeeData: {
        firstName: 'Test'+firstName,
        lastName: lastName,
        employeeId: id,
        username: 'TestUser'+firstName,
        password: 'Pla@ban123'
    }
})


