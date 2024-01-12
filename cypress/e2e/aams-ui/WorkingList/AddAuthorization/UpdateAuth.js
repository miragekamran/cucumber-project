import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import WorkingList from "../../../../pageobjects/WorkingList/WorkingList";

const workingList = new WorkingList()

When(/^User clicks on Working List tab and selects a month for the working list for Update$/, () => {
    cy.visit('/')
    cy.contains(workingList.workingList()).click()
    cy.get(workingList.monthPlaceHolder()).then(dropdown => {
        cy.wrap(dropdown).click()
        cy.get(workingList.monthDropDown()).each((listMonth, index) => {
            if (index === 1) {
                cy.wrap(listMonth).click()
            }
        })
    })
    // cy.contains(workingList.searchButton(), "Search").dblclick()
    cy.wait(3000)
})

And(/^User clicks on Update Authorization button for Update$/, () => {
    // cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[1]/table/tbody[2]/tr/td[1]/fa-icon').click()
    cy.xpath('/html/body/app-root/div/app-working-list/div[2]/app-working-list-table/div/div[2]/div[1]/table/tbody[1]/tr/td[1]/fa-icon').click()
})

// Then(/^User updates Effective date$/, () => {
//     cy.contains(workingList.effectiveDate(), "Effective Date:").find('input').then(input => {
//         cy.wrap(input).type('2023-04-11')
//     })
// })

And(/^User updates Previous date$/, () => {
    // cy.contains(workingList.previousDate(), "Previous Date:").find('input').then(input => {
    //     cy.wrap(input).type('2023-01-06')
    // })
    cy.contains(workingList.previousDate(), "Previous Date:").find('button').click()
    cy.get(workingList.updateMonth()).select('Aug')
    cy.get(workingList.monthDD()).select('13')
    // cy.get(workingList.updateMonth()).then(() => {
    //     cy.get(workingList.monthDD()).click()
        
    //     // .each((months, index) => {
    //     //     if (index === 9) {
    //     //         cy.wrap(months).click()
    //     //     }
    //     // })
    // })
})

// And(/^User updates City Pair$/, () => {
//     cy.contains(workingList.cityPair(), "City Pair:").find('[name="city-pair"]').type(' updated')
// })

// And(/^User selects Notes for update$/, () => {
//     cy.contains(workingList.note(), "Notes:").click()
//     cy.get(workingList.notes()).then(() => {
//         cy.get(workingList.notesDD()).each((listNotes, index) => {
//             if (index === 1) {
//                 cy.wrap(listNotes).click()
//             }
//         })
//     })
// })

// And(/^User updates Additional Notes$/, () => {
//     cy.get(workingList.additionalNotes()).type(' updated')
// })

// And(/^User updates Comments$/, () => {
//     // Effective Date
//     cy.contains(workingList.addComment(), "Update Comments ").click()
//     cy.contains(workingList.comment(), "Effective Date").click()
//     cy.get(workingList.commentText()).type("test updated")
//     cy.get(workingList.enterComment()).click({ multiple: true })
//     cy.contains(workingList.acceptComment(), " Accept ").click()
//     // Previous Date
//     cy.contains(workingList.addComment(), "Update Comments ").click()
//     cy.contains(workingList.comment(), "Previous Date").click()
//     cy.get(workingList.commentText()).type("test updated")
//     cy.get(workingList.enterComment()).click({ multiple: true })
//     cy.contains(workingList.acceptComment(), " Accept ").click()
//     // City Pair
//     cy.contains(workingList.addComment(), "Update Comments ").click()
//     cy.contains(workingList.comment(), "City Pair").click()
//     cy.get(workingList.commentText()).type("test updated")
//     cy.get(workingList.enterComment()).click({ multiple: true })
//     cy.contains(workingList.acceptComment(), " Accept ").click()
//     // Notes
//     cy.contains(workingList.addComment(), "Update Comments ").click()
//     cy.get(workingList.noteComment()).click()
//     cy.get(workingList.commentText()).type("test updated")
//     cy.get(workingList.enterComment()).click({ multiple: true })
//     cy.contains(workingList.acceptComment(), " Accept ").click()
// })

// Then(/^User clicks on Update Authorization button for update$/, () => {
//     cy.contains(workingList.update(), " Update ").click({ force: true })
// })
