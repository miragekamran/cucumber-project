import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import AirportAuthorization from '../../../../pageobjects/AirportAuthorizations/AirportAuthorizations';

const airportAuthorization = new AirportAuthorization();

When(/^User clicks on Edit$/, () => {
    cy.visit('/')
    cy.contains(airportAuthorization.edit(), "EDIT", {timeout: 10000}).click()
})

And(/^User clicks on Add Authorization button$/, () => {
    cy.contains(airportAuthorization.addAuthorization(), " Add Authorization ").click()
})

And(/^User clicks on CLOSURE$/, () => {
    cy.contains(airportAuthorization.closure(), "CLOSURE").click()
})

// select date
And(/^User selects Effective and Expiration date$/, () => {
    cy.get(airportAuthorization.effectiveDate()).type('2022-12-02')
    cy.get(airportAuthorization.endDate()).type('2022-12-03')
})

// select time
And(/^User selects Effective and Expiration time$/, () => {
    cy.get(airportAuthorization.startHour()).then(dropdown => {
        cy.wrap(dropdown).dblclick()
        cy.get(airportAuthorization.startHourDD()).each((startHour, index) => {
            if (index === 9) {
                cy.wrap(startHour).click()
            }
        })
    })
    cy.get(airportAuthorization.startMinute()).then(dropdown => {
        cy.wrap(dropdown).dblclick()
        cy.get(airportAuthorization.startMinuteDD()).each((startMinute, index) => {
            if (index === 35) {
                cy.wrap(startMinute).click()
            }
        })
    })
    cy.get(airportAuthorization.endHour()).then(dropdown => {
        cy.wrap(dropdown).dblclick()
        cy.get(airportAuthorization.startHourDD()).each((endHour, index) => {
            if (index === 16) {
                cy.wrap(endHour).click()
            }
        })
    })
    cy.get(airportAuthorization.endMinute()).then(dropdown => {
        cy.wrap(dropdown).dblclick()
        cy.get(airportAuthorization.startMinuteDD()).each((endMinute, index) => {
            if (index === 27) {
                cy.wrap(endMinute).click()
            }
        })
    })
})

// subfleet types
And(/^User selects All Subfleet Types$/, () => {
    cy.get(airportAuthorization.subfleetType()).click()
    cy.contains(airportAuthorization.allFleetTypes(), "Select All").click()
})

And(/^User adds authorization$/, () => {
    cy.contains(airportAuthorization.addAuthBtn(), " Add Authorizations ").click({force: true})
})

And(/^User is able to save authorization$/, () => {
    cy.contains(airportAuthorization.saveAuthBtn(), " Save ").click()
    cy.reload()
})
