import { When, And, Then, Given } from "cypress-cucumber-preprocessor/steps";
import USL from "../../../pageobjects/AuthorizationRequest/UnApprSerList";

const uSL = new USL()

Given(/^User logged into application$/, () => {
    cy.visit('/')
})

When(/^User ckicks on Unapproved Service List sub-tab$/, () => {

    cy.visit('/')
    cy.contains(uSL.authorizeWL()).click()
    cy.contains(uSL.Usl()).click()
    

})

Then(/^User selects a month to display$/, () => {

    // cy.get(uSL.monthPlaceHolder()).then(dropdown => {
    //     cy.wrap(dropdown).click()
    //     cy.get(uSL.monthDropDown()).each((listMonth, index) => {
    //         if (index === 3) {
    //             cy.wrap(listMonth).click()
    //         }
    //     })
    // })

    cy.get(uSL.monthPlaceHolder()).find('input').then(input => {

        cy.wrap(input).type('February').type('{enter}')
        cy.wait(4000)
        cy.wrap(input).type('April').type('{enter}')
        cy.wait(4000)
        cy.wrap(input).type('March').type('{enter}')


    })

})

Then(/^User edits a specific USL$/, () => {

    cy.contains(uSL.topHeader(), " C070 Regulars (R) ").xpath('/html/body/app-root/div/app-authorization-request/div/app-unapproved-service-list/div[2]/app-unapproved-service-list-table/div/div[2]/div[1]/table/tbody[1]/tr/td[1]/span[1]').click()

    cy.contains(uSL.editMonthPlaceHolder(), "Effective Date:").then(drop => {
        cy.wrap(drop).click()
        cy.get(uSL.monthDropDown()).each((listMonth, index) => {
            if (index === 3) {
                cy.wrap(listMonth).click()
            }
        })
    })

    cy.get(uSL.calendar()).click()

    cy.get(uSL.monthPick()).select('Jan')

    cy.get(uSL.yearPick()).select('2024')

    cy.contains(uSL.dayPick(), "20").click()

    cy.contains(uSL.comment(), "Comments:").find('input').then(input => {
        cy.wrap(input).type('automate testing')
    })

    cy.contains(uSL.save(), " Save ").click()



    // cy.contains(uSL.calendar(), "Previous Date:").then(drop => {
    //     cy.wrap(drop).click()
    //     cy.get(uSL.monthDropDown()).each((listMonth, index) => {
    //         if (index === 3) {
    //             cy.wrap(listMonth).click()
    //         }
    //     })
    // })




    // cy.contains(uSL.cancel(), " Cancel ").click({ force: true })

})
