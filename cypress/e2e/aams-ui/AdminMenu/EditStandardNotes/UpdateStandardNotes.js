import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import StandardNotes from '../../../../pageobjects/AdminMenu/EditStandardNotes';

const standardNotes = new StandardNotes();

When(/^User Click on Hamburger Menu to Update a Standard Note$/, () => {
    cy.visit('/')
    cy.get(standardNotes.hamburgerMenu()).click({ force: true }).wait(500)
    cy.get(standardNotes.menuOptions()).should('contain', 'Edit Standard Notes')
    cy.get(standardNotes.menuOptions()).should('contain', 'Fleet Management')
    cy.get(standardNotes.menuOptions()).should('contain', 'User Profile')
    cy.contains(standardNotes.menuOptions(), "Edit Standard Notes").click()
});

// Then(/^Verify the options of Hamburger Menu$/, () => {
//     cy.get(standardNotes.standardNotesPopUpHeader()).should('contain', ' Standard Notes ')
//     cy.get(standardNotes.standardNotesPopUpButtons()).should('contain', ' Add ')
//     cy.get(standardNotes.standardNotesPopUpButtons()).should('contain', ' Update ')
//     cy.get(standardNotes.standardNotesPopUpButtons()).should('contain', ' Delete ')
//     cy.get(standardNotes.standardNotesPopUpTextFields()).should('contain', 'New Standard Note:')
//     cy.get(standardNotes.standardNotesPopUpTextFields()).should('contain', 'Text Font Color:')
// });

And(/^User clicks on update tab$/, () => {
    cy.contains(standardNotes.standardNotesUpdateTab(), " Update ").click()
})

And(/^User selects a standard note to update$/, () => {
    // cy.contains('form', 'Standard Note:').find(standardNotes.standardNotesTextFIeld()).type('Test{enter}')
    // cy.contains('form', 'Standard Note:').find(standardNotes.standardNotesTextFIeld()).type('{enter}').click()
    // cy.wait(500)
    // cy.get(standardNotes.selectStandardNote()).click()
    cy.get(standardNotes.selectStandardNote()).then(dropdown => {
        cy.wrap(dropdown).click()
        cy.get(standardNotes.standardNotesDropDown()).each((listNotes, index) => {
            // index === 1
            // listNotes.click()
            if (index === 5) {
                cy.wrap(listNotes).click()
            }
        })
    })
});

And(/^User Updates the standard note$/, () => {
    cy.contains('form', 'Update Standard Note:').find(standardNotes.standardNotesNameUpdateTextField()).type('Test101')
})

And(/^User selects text font color for update$/, () => {
    // cy.get(standardNotes.standardNotesFontColor).type('Light Green{enter}')
    cy.get(standardNotes.standardNotesTextColor()).then(dropdown => {
        cy.wrap(dropdown).click()
        cy.get(standardNotes.fontColorDropDown()).each((listItem, index) => {
            if (index.length(-1)) {
                cy.wrap(listItem).click()
            }
        })
    })
})

Then(/^User is able to update a standard note$/, () => {
    cy.contains(standardNotes.standardNotesUpdateButton(), " Update ").click()
});
