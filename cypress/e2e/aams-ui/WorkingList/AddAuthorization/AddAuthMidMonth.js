import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import WorkingList from "../../../../pageobjects/WorkingList/WorkingList";

const workingList = new WorkingList()

When(/^User clicks on Working List tab and selects a month for the working list for Toggle-on Mid-Month$/, () => {
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
    // cy.contains(workingList.searchButton(), "Search").dblclick()
    cy.wait(3000)
})

And(/^User clicks on Update Authorization button for Toggle-on Mid-Month$/, () => {
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[1]/table/tbody[2]/tr/td[1]/fa-icon').click()
    cy.contains(workingList.midMonth(), "Mid-Month").click()
    cy.contains(workingList.update(), " Update ").click()
})

Then(/^User clicks on Working List tab and selects a month for the working list for Toggle-off Mid-Month$/, () => {
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

And(/^User clicks on Update Authorization button for Toggle-off Mid-Month$/, () => {
    cy.get(workingList.selectMidMonth()).contains("Mid").click()
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[1]/table/tbody[1]/tr/td[1]/fa-icon').click()
    cy.contains(workingList.midMonth(), "Mid-Month").click()
    cy.contains(workingList.update(), " Update ").click()
})
