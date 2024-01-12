import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import WorkingList from "../../../../pageobjects/WorkingList/WorkingList";

const workingList = new WorkingList()

Given(/^User logged into application$/, () => {
    cy.visit('/')
})

When(/^User clicks on Working List tab and selects a month for the working list$/, () => {
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

And(/^User clicks on Add Authorization button$/, () => {
    cy.contains(workingList.addAuth(), "Add Authorization").click()
    cy.wait(3000)

})

Then(/^User adds Effective date$/, () => {
    // cy.contains(workingList.effectiveDate(), "Effective Date:").find('input').then(input => {
    //     cy.wrap(input).type('2023-04-10')
    // })


    // Assumes a Datepicker widget is present on the page with an id of 'datepicker'

    // Define the date to select
    const targetDate = new Date('2023-04-10');

    // Get the month and year of the target date
    const targetMonth = targetDate.toLocaleString('default', { month: 'long' });
    const targetYear = targetDate.getFullYear().toString();

    // Click the Datepicker to open it
    cy.get('#datepicker').click();

    // Select the target year from the year dropdown
    cy.get('.react-datepicker__year-select').select(targetYear);

    // Select the target month from the month dropdown
    cy.get('.react-datepicker__month-select').select(targetMonth);

    // Select the target day from the day grid
    cy.get('.react-datepicker__day--0' + targetDate.getDate()).click();

    // Assert that the Datepicker displays the selected date
    cy.get('#datepicker').should('contain', targetDate.toDateString());

})

And(/^User adds Previous date$/, () => {
    cy.contains(workingList.previousDate(), "Previous Date:").find('input').then(input => {
        cy.wrap(input).type('2023-01-05')
    })
})

And(/^User selects Upgrade To$/, () => {
    cy.contains(workingList.upgradeTo(), "Upgrade To:").click()
    cy.get(workingList.upgradeStation()).then(() => {
        cy.get(workingList.upgradeDD()).each((listUpgrade, index) => {
            if (index === 0) {
                cy.wrap(listUpgrade).click()
            }
        })
    })
})

And(/^User selects Subfleet Type$/, () => {
    cy.contains(workingList.subfleetType(), "Subfleet Type:").click()
    cy.get(workingList.subfleets()).then(() => {
        cy.get(workingList.upgradeDD()).each((listSubfleets, index) => {
            if (index === 4) {
                cy.wrap(listSubfleets).click()
            }
        })
    })
    cy.contains("Subfleet Type:").click()
})

And(/^User selects Station$/, () => {
    cy.contains(workingList.station(), "Station:").click()
    cy.get(workingList.stations()).then(() => {
        cy.get(workingList.stationsDD()).each((listStations, index) => {
            if (index === 3) {
                cy.wrap(listStations).click()
            }
        })
    })
})

And(/^User inputs City Pair$/, () => {
    cy.contains(workingList.cityPair(), "City Pair:").find('[name="city-pair"]').type('automated test')
})

And(/^User selects Notes$/, () => {
    cy.contains(workingList.note(), "Notes:").click()
    cy.get(workingList.notes()).then(() => {
        cy.get(workingList.notesDD()).each((listNotes, index) => {
            if (index === 18) {
                cy.wrap(listNotes).click()
            }
        })
    })
})

And(/^User inputs Additional Notes$/, () => {
    cy.get(workingList.additionalNotes()).type('automated test')
})

Then(/^User Adds Comments$/, () => {
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

Then(/^User is able to Add an Authorization$/, () => {
    cy.contains(workingList.finalAdd(), " Add ").click({ force: true })
})
