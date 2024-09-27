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


/*  it('checking HOME PAGE ', () => {
    cy.visit('https://www.farmersjournal.ie/index.php', { timeout: 60000 })
    cy.get('#home-page-top-stories-title').should('not.be.empty') 
    cy.get('.video-box').should('not.be.empty') 
  })*/

  /*it('checking HOME PAGE - Videos component', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://www.farmersjournal.ie/index.php', { timeout: 60000 })
  })*/  

it('checking SUBSCRIBE SUCCESS - IF STATUS is 200', () => {
  cy.request('https://www.farmersjournal.ie/subscribe-success.php')
    .its('status')
    .should('equal', 200); // check if the response status is 200 (OK)
});  
  
it('checking SUBSCRIBEFORM STUDENT - IF STATUS 200', () => {
  cy.request('https://www.farmersjournal.ie/subscribeform-student.php?select=2&gf=0&substype=premium')
    .its('status')
    .should('equal', 200); // check if the response status is 200 (OK)
});    


it('checking STUDENT HUB - IF STATUS 200', () => {
  cy.request('https://www.farmersjournal.ie/schools-hub.php')
    .its('status')
    .should('equal', 200); // check if the response status is 200 (OK)
});


  
 
/*  it('checking subscribe.php -- PLANS -- component ', () => {
    cy.visit('https://www.farmersjournal.ie/subscribe.php', { timeout: 10000 })
    cy.get('#slot-print-standard').should('include.text', 'Digital Standard')
    cy.get('#slot-print-premium').should('include.text', 'Digital Premium')
    cy.get('#slot-digital-standard').should('include.text', 'Print Standard')
    cy.get('#slot-digital-premium').should('include.text', 'Print Premium') 
  })
*/

it('checking SUBSCRIBE SUCCESS - IF STATUS 200', () => {
  cy.request('https://www.farmersjournal.ie/subscribe-success.php')
    .its('status')
    .should('equal', 200); // check if the response status is 200 (OK)
});







  



  

  it('checking KH links', () => {
    cy.visit('https://www.farmersjournal.ie/knowledgehub.php')

    // find all hub links
    cy.get('.knowledgehub-list a').each(($link) => {
      const linkHref = $link.attr('href')

      // doing a requisition to the link
      cy.request({
        method: 'HEAD',
        url: linkHref,
        failOnStatusCode: false, // rule: dont fail 404, if fail send test dont passed by email
      }).then((response) => {
        expect(response.status).to.not.eq(404, `What link is brocked? ${linkHref}`)
      })
    })
  });


  

/* it('checking login proccess ', () => {

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
    cy.get('#sign-in-btn').click({ force: true })
    cy.get('#login-feedback', { timeout: 10000 }).should('be.empty')
    cy.reload()

  })
*/


/* OUT OF IFJ */  
/*it('GARDEN.IE checking subscribe.php -- PLANS -- component', () => {
  cy.visit('https://subscribe.garden.ie/', { timeout: 10000 })
  cy.get('#slot-digital-standard').should('include.text', 'Get it delivered')
  cy.get('#slot-complete').should('include.text', 'Buy as a gift')
});*/


  
/*it('ICM checking subscribe.php -- PLANS -- component', () => {
  cy.visit('https://subscribe2.irishcountrymagazine.ie/subscribe.php', { timeout: 10000 })
  cy.get('#slot-digital-standard').should('include.text', 'Print & digital')
  cy.get('#slot-print-premium').should('include.text', 'Digital')
  cy.get('#slot-complete').should('include.text', 'Buy as a gift')
});*/

/*  
it('TIF checking subscribe.php -- PLANS -- component', () => {
  cy.visit('https://www.theirishfield.ie/subscribe.php', { timeout: 10000 })
  cy.get('#slot-digital-standard').should('include.text', 'Digital')
  cy.get('#slot-print-premium').should('include.text', 'Print')
  cy.get('#slot-complete').should('include.text', 'Complete')
});
*/


/*
describe('should exist and have non-empty text', () => {
  it('Check IFJ most read section loading', () => {
    cy.visit('https://www.farmersjournal.ie/'); 

    // Check if the element exists
    cy.get('.most-read-section').find('.title-smallerline').should('exist');

    // If the element exists, check if it has non-empty text
    cy.get('.most-read-section').find('.title-smallerline').first().then($span => {
      if ($span.length > 0) {
        cy.wrap($span).should('not.be.empty').and('have.text');
      }
    });
  });
});
*/

/*
describe('should exist and have non-empty text', () => {
  it('Check TIF most read section loading', () => {
        cy.visit('https://www.theirishfield.ie/'); 

    // Check if the element exists
    cy.get('.most-read-section').find('span.label.editor').should('exist');

    // If the element exists, check if it has non-empty text
    cy.get('.most-read-section').find('span.label.editor').first().then($span => {
      if ($span.length > 0) {
        cy.wrap($span).should('not.be.empty').and('have.text');
      }
    });
  });
});
*/


  









  

  

})
