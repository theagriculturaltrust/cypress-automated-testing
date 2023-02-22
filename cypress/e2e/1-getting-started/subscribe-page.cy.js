import axios from 'axios';


/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('testing www.farmersjournal.ie/subscribe.php ', () => {
  beforeEach(() => {
    cy.visit('https://www.farmersjournal.ie/subscribe.php')
  })


  afterEach(function () {
      //console.log(this.currentTest.title)
      console.log(this.currentTest.state)
      if (this.currentTest.state != 'passed') {
        axios.get(`https://www.farmersjournal.ie/cypress-automated-tests/cypress-mail.php?test_title=${this.currentTest.title}&domain=farmersjournal_ie&where=subscribe.php`)
          .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
      }
      //console.log(__filename)
  })


  it('checking PLAN --Digital Standard-- component ', () => {
    cy.wait(500)

    cy.get('#slot-print-standard').should('include.text', 'Digital Standard')
  })

  it('checking PLAN --Digital Premium-- component ', () => {
    cy.get('#slot-print-premium').should('include.text', 'Digital Premium')
  })

  it('checking PLAN --Print Standard-- component ', () => {
    cy.get('#slot-digital-standard').should('include.text', 'Print Standard')
  })

  it('checking PLAN --Print Premium-- component ', () => {

    cy.get('#slot-digital-premium').should('include.text', 'Print Premium-') 

  })






})
