import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import AirportAuthorization from '../../../../pageobjects/AirportAuthorizations/AirportAuthorizations';

const airportAuthorization = new AirportAuthorization();

When(/^User clicks on Edit$/, () => {
    cy.visit('/')
    cy.contains(airportAuthorization.edit(), "EDIT", {timeout: 10000}).click()
})

And(/^User selects a closure for deletion$/, () => {
    cy.get(airportAuthorization.deleteBox()).click()
})

And(/^User clicks on save button$/, () => {
    cy.contains(airportAuthorization.saveDelete(), " Save ").click()
    cy.reload()
})
