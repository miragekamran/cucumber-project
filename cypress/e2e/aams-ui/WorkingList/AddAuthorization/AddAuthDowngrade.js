import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import WorkingList from "../../../../pageobjects/WorkingList/WorkingList";

const workingList = new WorkingList()

When(/^User clicks on Working List tab and selects a month for the working list for Downgrade$/, () => {
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

And(/^User clicks on Add Authorization button for Downgrade$/, () => {
    cy.contains(workingList.addAuth(), "Add Authorization").click()
    cy.wait(3000)

})

Then(/^User adds Effective date for Downgrade$/, () => {
    cy.contains(workingList.effectiveDate(), "Effective Date:").find('input').then(input => {
        cy.wrap(input).type('2023-04-12')
    })
})

And(/^User adds Previous date for Downgrade$/, () => {
    cy.contains(workingList.previousDate(), "Previous Date:").find('input').then(input => {
        cy.wrap(input).type('2023-01-07')
    })
})

And(/^User selects Downgrade To$/, () => {
    cy.contains(workingList.downgradeTo(), "Downgrade To:").click()
    cy.get(workingList.downgradeStation()).then(() => {
        cy.get(workingList.downgradeDD()).each((listDowngrade, index) => {
            if (index === 2) {
                cy.wrap(listDowngrade).click()
            }
        })
    })
})

And(/^User selects Subfleet Type for Downgrade$/, () => {
    cy.contains(workingList.subfleetType(), "Subfleet Type:").click()
    cy.get(workingList.subfleets()).then(() => {
        cy.get(workingList.upgradeDD()).each((listSubfleets, index) => {
            if (index === 6) {
                cy.wrap(listSubfleets).click()
            }
        })
    })
    cy.contains("Subfleet Type:").click()
})

And(/^User selects Station for Downgrade$/, () => {
    cy.contains(workingList.station(), "Station:").click()
    cy.get(workingList.stations()).then(() => {
        cy.get(workingList.stationsDD()).each((listStations, index) => {
            if (index === 8) {
                cy.wrap(listStations).click()
            }
        })
    })
})

And(/^User inputs City Pair for Downgrade$/, () => {
    cy.contains(workingList.cityPair(), "City Pair:").find('[name="city-pair"]').type('automated test')
})

And(/^User selects Notes for Downgrade$/, () => {
    cy.contains(workingList.note(), "Notes:").click()
    cy.get(workingList.notes()).then(() => {
        cy.get(workingList.notesDD()).each((listNotes, index) => {
            if (index === 19) {
                cy.wrap(listNotes).click()
            }
        })
    })
})

And(/^User inputs Additional Notes for Downgrade$/, () => {
    cy.get(workingList.additionalNotes()).type('automated test')
})

Then(/^User Adds Comments for Downgrade$/, () => {
    // Effective Date
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.contains(workingList.comment(), "Effective Date").click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
    // Previous Date
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.contains(workingList.comment(), "Previous Date").click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
    // Upgrade/Downgrade To
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.contains(workingList.comment(), "Upgrade/Downgrade To").click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
    // Present Grade
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.contains(workingList.comment(), "Present Grade").click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
    // For
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.contains(workingList.comment(), "For").click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
    // City Country
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.contains(workingList.comment(), "City Country").click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
    // Airport Name
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.contains(workingList.comment(), "Airport Name").click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
    // ICAO
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.contains(workingList.comment(), "ICAO").click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
    // IATA
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.contains(workingList.comment(), "IATA").click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
    // City Pair
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.contains(workingList.comment(), "City Pair").click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
    // Notes
    cy.contains(workingList.addComment(), "Add Comments ").click()
    cy.get(workingList.noteComment()).click()
    cy.get(workingList.commentText()).type("test")
    cy.get(workingList.enterComment()).click({ multiple: true })
    cy.contains(workingList.acceptComment(), " Accept ").click()
})

Then(/^User is able to Add an Authorization for Downgrade$/, () => {
    cy.contains(workingList.finalAdd(), " Add ").click({ force: true })
})
