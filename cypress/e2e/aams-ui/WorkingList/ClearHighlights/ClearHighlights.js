import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import WorkingList from "../../../../pageobjects/WorkingList/WorkingList";

const workingList = new WorkingList()

When(/^User clicks on Working List tab and selects a month for the working list for Clear Highlights$/, () => {
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

And(/^User clicks on Update Authorization button for Clear single Highlight$/, () => {
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[1]/table/tbody[2]/tr/td[2]/input').click()
})

Then(/^User clicks on Clear Highlights$/, () => {
    cy.contains(workingList.clearHighlights(), "Clear Highlights").click()
    cy.wait(3000)
})

And(/^User clicks on Update Authorization button for Clear Highlights as a group$/, () => {
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/thead/tr[2]/th[2]/input').click()
})

Then(/^User clicks on Clear Highlights as a group$/, () => {
    cy.contains(workingList.clearHighlights(), "Clear Highlights").click()
    cy.wait(3000)
})
