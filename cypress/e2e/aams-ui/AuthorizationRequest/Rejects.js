import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Rejec from "../../../pageobjects/AuthorizationRequest/UnApprSerList";

const Rej = new Rejec()

When(/^User ckicks on Rejects sub-tab$/, () => {

    cy.visit('/')
    cy.contains(Rej.authorizeWL()).click()
    cy.contains(Rej.rejects()).click()

})
