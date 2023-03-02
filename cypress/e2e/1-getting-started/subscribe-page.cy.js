import axios from 'axios';

// https://on.cypress.io/introduction-to-cypress

describe('testing www.farmersjournal.ie ', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false)
  })


  afterEach(function () {
      //console.log(this.currentTest.title)
      console.log(this.currentTest.state)
      if (this.currentTest.state != 'passed') {
        axios.get(`https://www.farmersjournal.ie/cypress-automated-tests/cypress-mail.php?test_title=${this.currentTest.title}&domain=farmersjournal_ie&where=_`)
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


  it('checking HOME PAGE ', () => {
    cy.visit('https://www.farmersjournal.ie/index.php', { timeout: 60000 })
    cy.get('#home-page-top-stories-title').should('not.be.empty') 
    cy.get('.video-box').should('not.be.empty') 
  })

  it('checking HOME PAGE - Videos component', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://www.farmersjournal.ie/index.php', { timeout: 60000 })
  })  


 
  it('checking subscribe.php -- PLANS -- component ', () => {
    cy.visit('https://www.farmersjournal.ie/subscribe.php', { timeout: 10000 })
    cy.get('#slot-print-standard').should('include.text', 'Digital Standard')
    cy.get('#slot-print-premium').should('include.text', 'Digital Premium')
    cy.get('#slot-digital-standard').should('include.text', 'Print Standard')
    cy.get('#slot-digital-premium').should('include.text', 'Print Premium') 
  })


  it('checking login proccess ', () => {

    cy.on('uncaught:exception', () => false)


    cy.visit('https://www.farmersjournal.ie/information/contact-us/150935', { timeout: 10000 })
    
    cy.get('#onetrust-accept-btn-handler').click({ force: true })
    cy.get('#link-login-btn').click({ force: true })
    cy.get("#email-main").clear().type("lazzi@farmersjournal.ie")
    cy.get("#password-main").clear().type("ligiano01")
     // when the password is correct and the login happens, it generates a failure in the core of cypress because it does not get the return in the .location of the javascript, and then cypress interrupts the test, it does not give failure or success
     // if login does not occur, and #login-feedback receives the login failure string, then cypress ends the test and takes error as status and sends the email
    cy.get('#sign-in-btn').click({ force: true })
    cy.get('#login-feedback', { timeout: 10000 }).should('be.empty')
    cy.get('#sign-in-btn').click({ force: true })
    cy.get('#login-feedback', { timeout: 10000 }).should('be.empty')
    cy.get('#sign-in-btn').click({ force: true })
    cy.get('#login-feedback', { timeout: 10000 }).should('be.empty')
    cy.get('#sign-in-btn').click({ force: true })
    cy.get('#login-feedback', { timeout: 10000 }).should('be.empty')
    cy.get('#sign-in-btn').click({ force: true })
    cy.get('#login-feedback', { timeout: 10000 }).should('be.empty')
    cy.get('#sign-in-btn').click({ force: true })
    cy.get('#login-feedback', { timeout: 10000 }).should('be.empty')    
    cy.get('#sign-in-btn').click({ force: true })
    cy.get('#login-feedback', { timeout: 10000 }).should('be.empty')
    cy.get('#sign-in-btn').click({ force: true })
    cy.get('#login-feedback', { timeout: 10000 }).should('be.empty')
    cy.get('#sign-in-btn').click({ force: true })
    cy.get('#login-feedback', { timeout: 10000 }).should('be.empty')
    cy.reload()

  })



})
