describe(`Render Home page`, () => {
  it(`renders the navbar`, () => {
    cy.visit(`http://localhost:8000/`)
    cy.contains(`Birou`).click()
  })
})
