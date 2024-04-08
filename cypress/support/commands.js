import 'cypress-fill-command'

Cypress.Commands.add('login', () => {
    cy.visit(Cypress.env("baseUrl"))
    cy.fixture('loginPage.json').then((login) => {
        cy.get(login.username_Field).type(Cypress.env("USER_NAME"))
            .get(login.password_Field).type(Cypress.env("USER_PASSWORD"))
            .get(login.loginBtn).click()
    })
})

Cypress.Commands.add('clickAddButton', () => {
    cy.fixture('adminPage.json').then((adminPage) => {
        cy.get(adminPage.admin).click()
          .get(adminPage.addBtn).click()
    })
})
