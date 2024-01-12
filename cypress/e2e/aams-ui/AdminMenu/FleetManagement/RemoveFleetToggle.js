import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Fleet from "../../../../pageobjects/AdminMenu/FleetManagement";

const fleet = new Fleet();

When(/^User clicks on Hamburger Menu to Remove a Fleet Type$/, () => {
    cy.visit('/')
    cy.get(fleet.hamburgerMenu()).click()
})

Then(/^User clicks on Fleet Management for removing a fleet type$/, () => {
    cy.contains(fleet.menuOptions(), "Fleet Management").click()
})

And(/^User clicks on Remove Fleet tab$/, () => {
    cy.contains(fleet.removeFleetTab(), " Remove Fleet ").click()
})

And(/^User selects a Subfleet Type for deletion$/, () => {
    cy.get(fleet.removeSubfleetType()).then(dropdown => {
        cy.wrap(dropdown).dblclick()
        cy.get(fleet.removeSubfleetDD()).each((removeSubfleet, index) => {
            if (index === 3) {
                cy.wrap(removeSubfleet).click()
            }
        })
    })
})

Then(/^User removes a fleet$/, () => {
    cy.contains(fleet.addFleetButton(), " Remove Fleet ").click()
})

Then(/^Caution toast for deletion$/, () => {
    cy.contains(fleet.removeCautionToast(), "Yes").click()
})
