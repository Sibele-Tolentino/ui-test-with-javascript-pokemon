const url = Cypress.config("baseUrl")

beforeEach(async () => {
    await cy.visit(url)
});

