import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import WorkingList from "../../../../pageobjects/WorkingList/WorkingList";

const workingList = new WorkingList()

When(/^User clicks on Working List tab and selects a month for Approval$/, () => {
    cy.visit('/')
    cy.contains(workingList.workingList()).click()
    cy.get(workingList.monthPlaceHolder()).then(dropdown => {
        cy.wrap(dropdown).click()
        cy.get(workingList.monthDropDown()).each((listMonth, index) => {
            if (index === 5) {
                cy.wrap(listMonth).click()
            }
        })
    })
    cy.contains(workingList.searchButton(), "Search").dblclick()
    cy.wait(3000)
})

And(/^User clicks on Approval button$/, () => {
    cy.contains(workingList.addAuth(), " Approval ").click()
})

And(/^User selects an Approval Date$/, () => {
    cy.contains(workingList.approvalDate(), "Approval Date:").find('input').then(input => {
        cy.wrap(input).type('2022-12-15')
    })
})

And(/^User puts in an Amendment Number$/, () => {
    cy.contains(workingList.amendmentNum(), "Amendment Number:").find('input').then(input => {
        cy.wrap(input).type('121')
    })
})

And(/^User selects a Concurrence Date$/, () => {
    cy.contains(workingList.concurrenceDate(), "Concurrence Date:").find('input').then(input => {
        cy.wrap(input).type('2021-12-15')
    })
})

Then(/^User clicks on Approve button$/, () => {
    cy.contains(workingList.approveBtn(), " Approve ").click()
})
