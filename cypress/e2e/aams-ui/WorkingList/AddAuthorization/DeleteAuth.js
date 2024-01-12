import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import WorkingList from "../../../../pageobjects/WorkingList/WorkingList";

const workingList = new WorkingList()

When(/^User clicks on Working List tab and selects a month for the working list Delete the Upgrade$/, () => {
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

Then(/^User clicks on Update Authorization button and Delete the Upgrade$/, () => {
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[1]/table/tbody[2]/tr/td[1]/fa-icon').click()
    cy.contains(workingList.delete(), " Delete ").click()
})

And(/^Caution toast for deletion of Upgrade$/, () => {
    cy.contains(workingList.removeCautionToast(), "Ok").click()
})

And(/^User clicks on Update Authorization button and Delete the Downgrade$/, () => {
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/tbody[2]/tr/td[1]/fa-icon').click()
    cy.contains(workingList.delete(), " Delete ").click()
})

Then(/^Caution toast for deletion of Downgrade$/, () => {
    cy.contains(workingList.removeCautionToast(), "Ok").click()
})
