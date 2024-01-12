import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Fleet from "../../../../pageobjects/AdminMenu/FleetManagement";

const fleet = new Fleet();

When(/^User clicks on Hamburger Menu to Update a Fleet Type$/, () => {
    cy.visit('/')
    cy.get(fleet.hamburgerMenu()).click()
})

Then(/^User clicks on Fleet Management for updating a fleet type$/, () => {
    cy.contains(fleet.menuOptions(), "Fleet Management").click()
})

And(/^User clicks on Update Fleet tab$/, () => {
    cy.contains(fleet.updateFleetTab(), " Update Fleet ").click()
    cy.wait(6000)
})

And(/^User selects a Subfleet Type for update$/, () => {
    cy.get(fleet.updateSubfleetType()).then(dropdown => {
        cy.wrap(dropdown).click()
        cy.get(fleet.updateSubfleetTypeDD()).each((listSubfleetTypes, index) => {
            if (index === 0) {
                cy.wrap(listSubfleetTypes).click()
            }
        })
    })

})

And(/^User selects Subfleet Order$/, () => {
    // cy.contains(fleet.updateSubfleetAfter(), " After ").click()
    cy.contains(fleet.updateSubfleetBefore(), " Before ").click()
})

And(/^User updates a Subfleet Type$/, () => {
    cy.get(fleet.updateSubfleetOrder()).then(dropdown => {
        cy.wrap(dropdown).dblclick()
        cy.get(fleet.updateSubfleetOrderDD()).each((listSubfleetOrder, index) => {
            if (index === 4) {
                cy.wrap(listSubfleetOrder).click()
            }
        })
    })
})

And(/^User selects Operation Specification for update$/, () => {
    cy.get(fleet.operationSpecification()).then(dropdown => {
        cy.wrap(dropdown).dblclick()
        cy.get(fleet.operationSpecificationDD()).each((operationSpecification, index) => {
            if (index === 1) {
                cy.wrap(operationSpecification).click()
            }
        })
    })
})

Then(/^User is able to update a fleet$/, () => {
    cy.contains(fleet.addFleetButton(), " Update Fleet ").click()
})
