import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import WorkingList from "../../../../pageobjects/WorkingList/WorkingList";

const workingList = new WorkingList()

When(/^User clicks on Working List tab and selects a month for Submit For Approval for C070 Downgrades$/, () => {
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

And(/^User clickes on calendar icon for C070 Downgrades$/, () => {
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[1]/table/thead/tr[1]/th[1]/div[1]/div/button').click()
})

And(/^User selects month, year, and a day for C070 Downgrades$/, () => {
    cy.get(workingList.calMonth()).select("Oct")
    cy.get(workingList.calYear()).select("2023")
    cy.contains(workingList.calDay(), "16").click()
})
