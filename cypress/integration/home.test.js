describe(`Render home page`, () => {
  it(`renders the navbar`, () => {
    cy.visit(`/`)
    cy.contains(/birou/i).click()
  })
})
