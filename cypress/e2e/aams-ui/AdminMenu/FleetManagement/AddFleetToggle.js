import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Fleet from "../../../../pageobjects/AdminMenu/FleetManagement";

const fleet = new Fleet();

Given(/^User logged into application$/, () => {
    cy.visit('/')
})

When(/^User clicks on Hamburger Menu to Add a Fleet Type$/, () => {

    cy.visit('/')
    cy.get(fleet.hamburgerMenu()).click()
})

And(/^Verify the options of Hamburger Menu$/, () => {
    cy.get(fleet.menuOptions()).should('contain', 'Edit Standard Notes')
    cy.get(fleet.menuOptions()).should('contain', 'Fleet Management')
    cy.get(fleet.menuOptions()).should('contain', 'User Profile')
})

Then(/^User clicks on Fleet Management for adding a fleet type$/, () => {
    cy.contains(fleet.menuOptions(), "Fleet Management").click()
})

And(/^User adds a new Fleet Type header$/, () => {
    cy.contains('form', 'Fleet Type:').find(fleet.fleetTypeHeader()).type('A')
})

And(/^User adds a new Fleet Type number$/, () => {
    cy.contains('form', 'Fleet Type:').find(fleet.fleetTypeNumber()).type('079')
})

And(/^User adds a new Subfleet Type header$/, () => {
    cy.contains('form', 'Subfleet Type:').find(fleet.subfleetTypeHeader()).type('M')
})

And(/^User adds a new Subfleet Type number$/, () => {
    cy.contains('form', 'Subfleet Type:').find(fleet.subfleetTypeNumber()).type('U89')
})

And(/^User adds a new Subfleet Type model$/, () => {
    cy.contains('form', 'Model:').find(fleet.subfleetTypeModel()).type('12LM7')
})

And(/^User selects Operation Specification$/, () => {
    cy.get(fleet.operationSpecification()).then(dropdown => {
        cy.wrap(dropdown).dblclick()
        cy.get(fleet.operationSpecificationDD()).each((operationSpecification, index) => {
            if (index === 0) {
                cy.wrap(operationSpecification).should('contain', 'ETOPS (B342) Capable').click()
            }
        })
    })
})

Then(/^User is able to add a fleet$/, () => {
    cy.contains(fleet.addFleetButton(), " Add Fleet ").click()
})
