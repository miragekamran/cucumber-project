import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ExportWL from "../../../pageobjects/Reports/ExportWL";

const exportWL = new ExportWL();

Given(/^User logged into application$/, () => {
    cy.visit('/')
})

When(/^User clicks on Reports tab$/, () => {
    cy.visit('/')
    cy.contains(exportWL.reportsMenuBar(), "Reports").click()
})

When(/^User clicks on Export Reports sub tab$/, () => {
    cy.contains(exportWL.exportReportsSubMenu(), "Export Reports").click()
})

When(/^User is able to Export a Working List$/, () => {
    cy.contains(exportWL.exportWorkingList(), " Download Working List (xlsx) ").click()
})
