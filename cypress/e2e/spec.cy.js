describe('User flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'tricks'
    })
  })
  it('Should include a title, form, 3 tricks', () => {
    cy.get('h1').contains('Sick Trick Wish List')
  })
})