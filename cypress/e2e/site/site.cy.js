import {CreateUser, createRecordTest} from "../tool/testSteps/testMethods";
import {userData, web} from "../variables/settings";
///<reference types="cypress" />

describe('Open the site', () => {
  beforeEach(() => {
    CreateUser(web, userData)
  })

  it('Open tool home page', () => {
    cy.get('#toolnavbtn').click()
    cy.get('.col-md-10 > :nth-child(1) > .btn-group > .btn-primary').should('have.text', 'Production Planing Tool')
  })

  it('Open simulation home page', () => {
    cy.get('#simulationnavbtn').click()
    cy.get('.col-md-10 > :nth-child(1) > .btn-group > .btn-primary').should('have.text', 'Simulation Tool')
  })
})