describe("Home", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it(`renders the navbar`, () => {
    cy.contains(/birou/i).click()
  })

  it("accepts input", () => {
    cy.contains(/contact/i).click()
    const inputName = "Enter name"
    const inputEmail = "Email"
    cy.get('[name="name"]').type(inputName).should("have.value", inputName)
    cy.get('[name="email"]').type(inputEmail).should("have.value", inputEmail)
    cy.get(".contact-button").click()
  })
})
