describe('Pokedex', function() {
  it('one can navigate from the main page to the page of a particular Pokemon', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})