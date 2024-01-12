import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import NomOpsSpec from "../../../pageobjects/AuthorizationRequest/NomOpsSpec";

const nomOpsSpec = new NomOpsSpec()

When(/^User ckicks on Nominate OPS SPEC sub-tab$/, () => {

    cy.visit('/')
    cy.contains(nomOpsSpec.authorizeWL()).click()
    cy.contains(nomOpsSpec.NominateOpsSpec()).click()
    
})