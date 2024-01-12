import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Appr from "../../../pageobjects/AuthorizationRequest/UnApprSerList";

const uPpr = new Appr()


When(/^User ckicks on Approvals sub-tab$/, () => {

    cy.visit('/')
    cy.contains(uPpr.authorizeWL()).click()
    cy.contains(uPpr.approvals()).click()

})