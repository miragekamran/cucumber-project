import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import WorkingList from "../../../../pageobjects/WorkingList/WorkingList";

const workingList = new WorkingList()

When(/^User clicks on Working List tab and selects a month for C070 Downgrades$/, () => {
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

And(/^User clicks on Status for C070 Downgrades$/, () => {
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/tbody/tr[1]/td[2]/span[2]/fa-icon').click()
})

And(/^User Approves SMS Reviewer groups for C070 Downgrades$/, () => {
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/tbody/tr[2]/td/app-sms-tracking/form/table/tbody/tr[1]/td[3]/input').click()
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/tbody/tr[2]/td/app-sms-tracking/form/table/tbody/tr[2]/td[3]/input').click()
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/tbody/tr[2]/td/app-sms-tracking/form/table/tbody/tr[3]/td[3]/input').click()
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/tbody/tr[2]/td/app-sms-tracking/form/table/tbody/tr[4]/td[3]/input').click()
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/tbody/tr[2]/td/app-sms-tracking/form/table/tbody/tr[5]/td[3]/input').click()
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/tbody/tr[2]/td/app-sms-tracking/form/table/tbody/tr[6]/td[3]/input').click()
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/tbody/tr[2]/td/app-sms-tracking/form/table/tbody/tr[7]/td[3]/input').click()
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[6]/table/tbody/tr[2]/td/app-sms-tracking/form/table/tbody/tr[8]/td[3]/input').click()
})

Then(/^User saves all SMS approvals for C070 Downgrades$/, () => {
    cy.contains(workingList.saveBtn(), "Save").click()
})

