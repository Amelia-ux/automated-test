describe('Login', () => {
  const username = "Admin";
  const password = "654321";
  it('Visit PPDB Web ', () => {
    cy.visit('http://127.0.0.1:8000/')
  })

  it('Login', () => {
    cy.wait(2000)
    cy.get('.nav-item > .nav-link').click()
    cy.wait(1000)
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#remember').click()
    cy.get('.btn').click()
    cy.get('.btn').click()
    cy.get(':nth-child(4) > :nth-child(5) > form > .btn-danger').click()
  })
})