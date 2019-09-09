/// <reference types="Cypress" />

context('Local basic test', () => {

  beforeEach(() => {
    cy.visit(`/`)
  });

  it('Has right title', () => {
    // https://on.cypress.io/type
    cy.get('nav h1')
      .should('be.visible')
      .should('contain', 'Hello, React!')
  });

});
