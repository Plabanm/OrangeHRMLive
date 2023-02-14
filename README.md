# Orange HRM Live UI Automation with Playwright
Playwright is a new automations framework getting lot of tractions recenly and competing with Cypress and Selenium


# Created with: 

- [x] [Playwright](https://playwright.dev/)

# Running the pack

## PreRequisit

- [x] [Node Js](https://nodejs.org/es/download/)

## Steps to install:

- Open Terminal
- Go to the folder you want to clone the project eg: `cd downloads`
- Clone the Repo ``
- Go to project folder `cd orangehrmlive` folder
- Use `npm i` to install all dependecies
- Use `npx playwright install` to install browsers
- run tests using Test Commands below

## Test Commands:

- Use `npm run test` to run all tests on all browsers
- Use `npm run test:login` to run login tests on all browsers
- Use `npm run test:pim` to run PIM tests on all browsers
- Use `npm run test:smoke` to run smoke tests on all browsers
- Use `npm run test:headed` for Headed Mode [headless by default]
- Use `npm run test:chrome` parameter to run tests on Chrome browser [runs all browsers by defult]
- Use `npm run test:webkit` parameter to run tests on Safari browser [runs all browsers by defult]
- Use `npm run test:firefox` parameter to run tests on Firefox browser [runs all browsers by defult]
- Test failure will automatically open tests report
- Use `npm run report` to view report after succefull test run


# Possible Improvements

- Better use of Hooks to remove repteatative code from test files
- If there is a business case: Cucumber / concept.js implemnetation
- Need to implement playright style locators which seems to be more modern apporach
- Definately needs more test coverage [Negetive and Image upload]
- If there is a business case: targeted specific devices can be set up eg: mobile
- API calls can be used for authentication so login tests is not being run so many times
- Better eslit/faormatting settings
- if there is a business case: visual regretion testing can be added
- Page object can be refactored to be more efficient
- In-file paralal execution can be implimentd but doesnt add much value at this level
- Important to delete created data
- Better reporting can be implemented eg: Allure reporting
- Fixtures seems to be very useful feature. There are scope to make more and better use of fixtures