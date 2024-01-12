import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import StandardNotes from '../../../../pageobjects/AdminMenu/EditStandardNotes';

const standardNotes = new StandardNotes();

When(/^User Click on Hamburger Menu to Delete a Standard Note$/, () => {
    cy.visit('/')
    cy.get(standardNotes.hamburgerMenu()).click({force: true})
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

And(/^User clicks on delete tab$/, () => {
    cy.contains(standardNotes.standardNotesDeleteTab(), " Delete ").click()
})

And(/^User selects a standard note to delete$/, () => {
    cy.contains('form', 'Standard Note:').find(standardNotes.standardNotesDeleteTextField()).type('Test43{enter}')
    cy.contains('form', 'Standard Note:').find(standardNotes.standardNotesDeleteTextField()).type('{enter}').click()
});

Then(/^User is able to delete a standard note$/, () => {
    cy.contains(standardNotes.standardNotesDeleteButton(), " Delete ").click()
});
