import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import StandardNotes from '../../../../pageobjects/AdminMenu/EditStandardNotes';

const standardNotes = new StandardNotes();

When(/^User Click on Hamburger Menu to Add a Standard Note$/, () => {
        
        cy.visit('/')
        cy.get(standardNotes.hamburgerMenu()).click()
        cy.get(standardNotes.menuOptions()).should('contain', 'Edit Standard Notes')
        cy.get(standardNotes.menuOptions()).should('contain', 'Fleet Management')
        cy.get(standardNotes.menuOptions()).should('contain', 'User Profile')
        cy.contains(standardNotes.menuOptions(), "Edit Standard Notes").click()
});

// Then(/^Verify the options of Hamburger Menu$/, () => {
//         cy.get(standardNotes.standardNotesPopUpHeader()).should('contain', ' Standard Notes ')
//         cy.get(standardNotes.standardNotesPopUpButtons()).should('contain', ' Add ')
//         cy.get(standardNotes.standardNotesPopUpButtons()).should('contain', ' Update ')
//         cy.get(standardNotes.standardNotesPopUpButtons()).should('contain', ' Delete ')
//         cy.get(standardNotes.standardNotesPopUpTextFields()).should('contain', 'New Standard Note:')
//         cy.get(standardNotes.standardNotesPopUpTextFields()).should('contain', 'Text Font Color:')
// });

And(/^User adds a new standard note$/, () => {
        cy.contains('form', 'New Standard Note:').find(standardNotes.newStandardNotesTextField()).type('Test98')
});

And(/^User selects text font color for add$/, () => {
        // cy.get(standardNotes.standardNotesFontColor).type('Light Blue{enter}')
        cy.get(standardNotes.standardNotesTextColor()).then(dropdown => {
                cy.wrap(dropdown).click()
                cy.get(standardNotes.fontColorDropDown()).each((listItem, index) => {
                        if (index === 3) {
                                cy.wrap(listItem).click()
                        }
                })
        })
})

Then(/^User is able to add a standard note$/, () => {
        cy.contains(standardNotes.standardNotesAddButton(), " Add ").click()
        cy.wait(500)
});
