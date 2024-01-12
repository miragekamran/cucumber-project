import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import AirportAuthorization from '../../../../pageobjects/AirportAuthorizations/AirportAuthorizations';

const airportAuthorization = new AirportAuthorization();

When(/^User clicks on Edit$/, () => {
    cy.visit('/')
    cy.contains(airportAuthorization.edit(), "EDIT", {timeout: 10000}).click()
})

And(/^User selects all closures for deletion$/, () => {
    cy.get(airportAuthorization.deleteBox())
      .as('checkboxes')
      .check()

    cy.get('@checkboxes')
      .each(authDeleted => {
          expect(authDeleted[0].checked).to.equal(true)
      })
})

And(/^User clicks on save button$/, () => {
    cy.contains(airportAuthorization.saveDelete(), " Save ").click()
    cy.reload()
})
