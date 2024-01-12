import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import WorkingList from "../../../../pageobjects/WorkingList/WorkingList"

const workingList = new WorkingList()

And(/^User selects previous month$/, () => {
    cy.visit('/')
    cy.contains(workingList.workingList()).click()
    cy.get(workingList.monthPlaceHolder()).then(dropdown => {
        cy.wrap(dropdown).click()
        cy.get(workingList.monthDropDown()).each((listMonth, index) => {
            // index === 0
            // listMonth.click()
            if (index === 0) {
                cy.wrap(listMonth).click()
            }
        })
    })
})

// Then(/^User is able to search for previous month$/, () => {
//     cy.contains(workingList.searchButton(), "Search").dblclick()
// })